/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cookie-consent-js
 * License: MIT, see file 'LICENSE'
 */

const CookieConsent = function CookieConsent(props) {

    const _t = {
        "title": "Cookie settings",
        "body": "We use cookies to personalize content and analyze traffic to our website. You can choose to accept only cookies that are necessary for the website to function or to also allow tracking cookies. For more information, please see our --privacy-policy--.",
        "privacyPolicy": "privacy policy",
        "buttonAcceptAll": "Accept all cookies",
        "buttonAcceptTechnical": "Only accept technically necessary cookies"
    };

    const _this = this
    _this.props = {
        buttonPrimaryClass: "btn btn-primary", // the "accept all" buttons class, only used for styling
        buttonSecondaryClass: "btn btn-secondary", // the "accept necessary" buttons class, only used for styling
        autoShowModal: true, // disable autoShowModal on the privacy policy page, to make that page readable
        blockAccess: false, // set "true" to block the access to the website before choosing a cookie configuration
        position: "centre", // position ("left" or "right"), if blockAccess is false
        postSelectionCallback: undefined, // callback, after the user has made a selection
        lang: navigator.language, // the language, in which the dialog is shown
        defaultLang: "en", // default language, if the `lang` is not available as translation in `cookie-consent-content`
        content: [], // deprecated, we now have a `content` folder, which contains the language files
        contentUrl: "./cookie-consent-content", // the url of the "cookie-consent-content" folder, which contains the language files
        privacyPolicyUrl: "privacy-policy.html",
        cookieName: "cookie-consent-tracking-allowed",  // the name of the cookie, the cookie is `true` if tracking was accepted
        modalId: "cookieConsentModal" // the id of the modal dialog element
    }
    for (let property in props) {
        if (property !== "content") {
            // noinspection JSUnfilteredForInLoop
            _this.props[property] = props[property]
        }
    }
    _this.lang = _this.props.lang
    if (_this.lang.indexOf("-") !== -1) {
        _this.lang = _this.lang.split("-")[0]
    }
    for (let contentProperty in props.content) {
        _this.props.content[contentProperty] = props.content[contentProperty]
    }

    renderModal()

    function renderModal() {
        const linkPrivacyPolicy = '<a href="' + _this.props.privacyPolicyUrl + '">' + _t.privacyPolicy + '</a>'
        if (_this.props.content[_this.lang] === undefined) {
            _this.lang = _this.props.defaultLang
        }
        let modalClass = "cookie-consent-modal"
        if (_this.props.blockAccess) {
            modalClass += " block-access"
        }
        _this.modalContent =
            '<div class="' + modalClass + '">' +
            '<div class="modal-content-wrap ' + _this.props.position + '">' +
            '<div class="modal-content">' +
            '<div class="modal-header">--header--</div>' +
            '<div class="modal-body">--body--</div>' +
            '<div class="modal-footer">--footer--</div>' +
            '</div></div><!-- end cookie-consent.js -->'
        _this.modalContent = _this.modalContent.replace(/--header--/, "<h3 class=\"modal-title\">" + _t.title + "</h3>")
        _this.modalContent = _this.modalContent.replace(/--body--/,
            _t.body.replace(/--privacy-policy--/, linkPrivacyPolicy)
        )
        _this.modalContent = _this.modalContent.replace(/--footer--/,
            "<div class='buttons'>" +
            "<button class='btn-accept-necessary " + _this.props.buttonSecondaryClass + "'>" + _t.buttonAcceptTechnical + "</button>" +
            "<button class='btn-accept-all " + _this.props.buttonPrimaryClass + "'>" + _t.buttonAcceptAll + "</button>" +
            "</div>"
        )
        if (getCookie(_this.props.cookieName) === undefined && _this.props.autoShowModal) {
            showDialog()
        }
    }

    function setCookie(name, value, days) {
        let expires = ""
        if (days) {
            const date = new Date()
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
            expires = "; expires=" + date.toUTCString()
        }
        document.cookie = name + "=" + (value || "") + expires + "; Path=/; SameSite=Strict;"
    }

    function getCookie(name) {
        const nameEQ = name + "="
        const ca = document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length)
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length)
            }
        }
        return undefined
    }

    function removeCookie(name) {
        document.cookie = name + '=; Path=/; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }

    function documentReady(fn) {
        if (document.readyState !== 'loading') {
            fn()
        } else {
            document.addEventListener('DOMContentLoaded', fn)
        }
    }

    function hideDialog() {
        _this.modal.style.display = "none"
    }

    function showDialog() {
        documentReady(function () {
            _this.modal = document.getElementById(_this.props.modalId)
            if (!_this.modal) {
                _this.modal = document.createElement("div")
                _this.modal.id = _this.props.modalId
                _this.modal.innerHTML = _this.modalContent
                document.body.append(_this.modal)
                _this.modal.querySelector(".btn-accept-necessary").addEventListener("click", function () {
                    setCookie(_this.props.cookieName, "false", 365)
                    hideDialog()
                    if (_this.props.postSelectionCallback) {
                        _this.props.postSelectionCallback()
                    }
                })
                _this.modal.querySelector(".btn-accept-all").addEventListener("click", function () {
                    setCookie(_this.props.cookieName, "true", 365)
                    hideDialog()
                    if (_this.props.postSelectionCallback) {
                        _this.props.postSelectionCallback()
                    }
                })
            } else {
                _this.modal.style.display = "block"
            }
        }.bind(this))
    }

    // API

    _this.reset = function () {
        removeCookie(_this.props.cookieName)
        showDialog()
    }

    _this.trackingAllowed = function () {
        return getCookie(_this.props.cookieName) === "true"
    }
}

export default CookieConsent;
