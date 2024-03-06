function setConsent(){
    const acceptedCategories = CookieConsent.getUserPreferences().acceptedCategories;
    const consentMode = {
        'functionality_storage': acceptedCategories.includes('necessary') ? 'granted':'denied',
        'security_storage': acceptedCategories.includes('necessary') ? 'granted':'denied',
        'analytics_storage': acceptedCategories.includes('analytics') ? 'granted':'denied',
        'ad_storage': acceptedCategories.includes('ads') ? 'granted':'denied',
        'ad_personalization': acceptedCategories.includes('ads') ? 'granted':'denied',
        'ad_user_data': acceptedCategories.includes('ads') ? 'granted':'denied'
    };
    gtag('consent', 'update', consentMode);
    localStorage.setItem('consentMode', JSON.stringify(consentMode));
}

CookieConsent.run({

    disablePageInteraction: false,

    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    mode: 'opt-in',                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    delay: 0,                               // default: 0
    auto_language: null,                     // default: null; could also be 'browser' or 'document'
    autorun: true,                          // default: true
    force_consent: false,                   // default: false
    hide_from_bots: true,                   // default: true
    remove_cookie_tables: false,             // default: false
    cookie_expiration: 182,                 // default: 182 (days)
    cookie_necessary_only_expiration: 182,   // default: disabled
    cookie_domain: location.hostname,       // default: current domain
    cookie_path: '/',                       // default: root
    cookie_same_site: 'Lax',                // default: 'Lax'
    use_rfc_cookie: false,                  // default: false
    revision: 0,

    cookie: {
        name: 'cc_cookie',
    },

    guiOptions: {
        consentModal: {
            layout: 'box wide',
            position: 'bottom right'
        },
        preferencesModal: {
            layout: 'box'
        }
    },

    onFirstConsent: () => {
        setConsent();
    },

    onConsent: () => {
        setConsent();
        updateCookiePlaceholders();
    },

    onChange: () => {
        setConsent();
        updateCookiePlaceholders();
    },

    categories: {
        necessary: {
            readOnly: true,
            enabled: true
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^(_ga|_gid)/
                    }
                ]
            }
        },
        ads: {}
    },

    language: {
        default: 'de',

        translations: {
            de: {
                consentModal: {
                    // title: 'Hello traveller, it\'s cookie time!',
                    description: 'Wir verwenden Cookies, um technische Funktionen auf unserer Webseite zu gewährleisten und, um unsere Webseite für Sie zu verbessern. Mit Ihrer Zustimmung erlauben Sie uns die Cookies zu Marketing- und Analysezwecke zu verwenden. Alle Einzelheiten zu unseren Cookies finden Sie in unserer <a href="/datenschutz" target="_blank">Datenschutzerklärung</a>. Sie haben jederzeit die Option, in den Cookie-Einstellungen optionale Cookies abzulehnen.',
                    acceptAllBtn: 'Zustimmen',
                    // acceptNecessaryBtn: 'Nur Notwendige',
                    showPreferencesBtn: 'Cookie Einstellungen',
                    // closeIconLabel: 'Reject all and close',
                    footer: `
                        <a href="/datenschutz">Datenschutz</a>
                        <a href="/impressum">Impressum</a>
                    `
                },
                preferencesModal: {
                    title: 'Erweiterte Cookie-Einstellungen',
                    acceptAllBtn: 'Alle akzeptieren',
                    // acceptNecessaryBtn: 'Nur Notwendige',
                    savePreferencesBtn: 'Auswahl speichern',
                    sections: [
                        {
                            title: 'Cookie-Nutzung 📢',
                            description: 'Wir verwenden Cookies, um die Grundfunktionen der Website sicherzustellen und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie festlegen, ob Sie sich jederzeit anmelden oder abmelden möchten. Weitere Einzelheiten zu Cookies und anderen sensiblen Daten finden Sie in der vollständigen <a href="/datenschutz" class="cc-link">Datenschutzerklärung</a>.'
                        }, 
                        {
                            title: 'Notwendige Cookies',
                            description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren dieser Website unerlässlich. Ohne diese Cookies würde die Website nicht ordnungsgemäß funktionieren.',
                            linkedCategory: 'necessary',
                            cookieTable:{
                                caption: 'Cookie table',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    desc: 'Beschreibung'
                                },
                                body: [
                                    {
                                        name: '_cfuvid',
                                        domain: 'hubspot.com',
                                        desc: 'Zuordnung des Quilar Accounts bei Hubspot',
                                    },
                                    {
                                        name: '__cf_bm',
                                        domain: 'hubspot.com',
                                        desc: 'Bot Filterung'
                                    },
        
                                ]
                            }
                        }, 
                        {
                            title: 'Leistungs- und Analysecookies',
                            description: 'Diese Cookies ermöglichen es der Website, sich an die von Ihnen in der Vergangenheit getroffenen Entscheidungen zu erinnern.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                caption: 'Cookie table',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    desc: 'Beschreibung'
                                },
                                body: [
                                    {
                                        name: '_ga',
                                        domain: 'google.com',
                                        desc: 'Wird verwendet, um Webseitenbesucher zu identifizieren',
                                    },
                                    {
                                        name: '_gid',
                                        domain: 'google.com',
                                        desc: 'Ähnlich wie _ga wird dieser Cookie zur Identifizierung jedes Webseitenbesuchs genutzt und zum Verständnis, wie unsere Webseite genutzt wird.',
                                    },
                                    {
                                        name: 'hubspotutk',
                                        domain: 'hubspot.com',
                                        desc: 'Legt eine eindeutige ID für die Sitzung fest. Dadurch kann die Webseite Daten über Besucherverhalten für statistische Zwecke erhalten.',
                                    },
                                    {
                                        name: '__hstc',
                                        domain: 'hubspot.com',
                                        desc: 'Legt eine eindeutige ID für die Sitzung fest. Dadurch kann die Webseite Daten über Besucherverhalten für statistische Zwecke erhalten.',
                                    },
                                    {
                                        name: '__hssc',
                                        domain: 'hubspot.com',
                                        desc: 'Gibt an, ob die Cookie-Daten im Browser des Besuchers aktualisiert werden müssen.',
                                    },
                                    {
                                        name: '__hsrc',
                                        domain: 'hubspot.com',
                                        desc: 'Wird verwendet, um den Browser des Besuchers bei Rückkehr auf der Website zu erkennen.',
                                    },
                                    {
                                        name: '_clck',
                                        domain: 'microsoft.com',
                                        desc: 'Behält die Clarity-Benutzer-ID und die Einstellungen bei, die eindeutig für diese Site sind und derselben Benutzer-ID zugeordnet sind.',
                                    },
                                    {

                                        name: '_clsk',
                                        domain: 'microsoft.com',
                                        desc: 'Verbindet mehrere Seitenaufrufe eines Benutzers zu einer einzigen Clarity-Sitzungsaufzeichnung.',
                                    },
                                    {

                                        name: 'CLID',
                                        domain: 'microsoft.com',
                                        desc: 'Identifiziert den Benutzer, den Clarity zum ersten Mal auf einer Website gesehen hat, die Clarity verwendet.',
                                    },
                                    {

                                        name: 'ANONCHK',
                                        domain: 'microsoft.com',
                                        desc: 'Gibt an, ob MUID an ANID übertragen wird, ein Cookie, das für Werbung verwendet wird. Clarity verwendet kein ANID und ist daher immer auf 0 gesetzt.',
                                    },
                                    {

                                        name: 'HERR',
                                        domain: 'microsoft.com',
                                        desc: 'Gibt an, ob MUID aktualisiert werden soll.',
                                    },
                                    {

                                        name: 'MUID',
                                        domain: 'microsoft.com',
                                        desc: '	Identifiziert eindeutige Webbrowser, die Microsoft-Websites besuchen. Diese Cookies werden für Werbung, Website-Analysen und andere betriebliche Zwecke verwendet.',
                                    },
                                    {

                                        name: 'SM',
                                        domain: 'microsoft.com',
                                        desc: 'Wird zur Synchronisierung der MUID zwischen Microsoft-Domänen verwendet.',
                                    },

                                ]
                            }
                        }, {
                            title: 'Werbe- und Targetingcookies',
                            description: 'Marketing-Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind und daher wertvoller für Publisher und werbetreibende Drittparteien sind.',
                            linkedCategory: 'ads',
                            cookieTable:{
                                caption: 'Cookie table',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    desc: 'Beschreibung'
                                },
                                body: [
                                    {
                                        name: '_fbp',
                                        domain: 'meta.com',
                                        desc: 'Wird dazu verwendet, um individuelle Besucher der Webseite durch eine eindeutige Kennung(ID) zu identifizieren. Es ermöglicht Meta, Werbeanzeigen auf Facebook oder digitalen Plattformen, die Facebook-Werbung nutzen, gezielt an Personen zu richten., die bereits unsere Webseite besucht haben. Es dient zur Analyse und Optimierung der Wirksamkeit von Facebook-Werbekampagnen.',
                                    },
                                    {
                                        name: 'fr',
                                        domain: 'meta.com',
                                        desc: 'Wird dazu verwendet, um die Relevanz von Werbung für Nutzer zu erhöhen. Es hilft dabei, die richtigen Anzeigen basierend auf dem Verhalten des Nutzers zu schalten und betrügerische Aktivitäten zu verhindern.',
                                    },
                                    {
                                        name: '_fbc',
                                        domain: 'meta.com',
                                        desc: 'Wird dazu verwendet, um die Konversion unserer Werbeanzeige zu verfolgen und ist nützlich für die Zuschreibung und Analysezwecke unserer Werbeanzeigen auf Facebook.',
                                    }
        
                                ]
                            }
                        }, 
                        {
                            title: 'Mehr Informationen',
                            description: 'Bei Fragen zu unserer Richtlinie zu Cookies und Ihren Auswahlmöglichkeiten kontaktieren Sie uns bitte. <a class="cc-link" href="mailto:info@quilar.de">Kontakt</a>.',
                        }
                    ]
                }
            }
        }
    }
});