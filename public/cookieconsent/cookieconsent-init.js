// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'de',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    mode: 'opt-in',                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    delay: 0,                               // default: 0
    auto_language: null,                     // default: null; could also be 'browser' or 'document'
    autorun: true,                          // default: true
    force_consent: false,                   // default: false
    hide_from_bots: true,                   // default: true
    remove_cookie_tables: false,             // default: false
    cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    cookie_expiration: 182,                 // default: 182 (days)
    cookie_necessary_only_expiration: 182,   // default: disabled
    cookie_domain: location.hostname,       // default: current domain
    cookie_path: '/',                       // default: root
    cookie_same_site: 'Lax',                // default: 'Lax'
    use_rfc_cookie: false,                  // default: false
    revision: 0,                            // default: 0

    gui_options:{
        consent_modal:{
            layout: "cloud",                  // box, cloud, bar
            position: "bottom center",       // bottom, middle, top - left, right, center
            transition: "slide"             // zoom, slide
        },
        settings_modal: {
            layout: "box",                  // box, bar
            position: "left",               // right, left (available only if bar layout selected)
            transition: "slide"             // zoom, slide
        }
    },

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
        if (cc.allowedCategory('analytics')) {
            typeof gtag === 'function' && gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    },

    onAccept: function (cookie) {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-2RR5XRNY1R');
    },

    onChange: function (cookie, changed_preferences) {
        console.log('cookies settings got updated');
        // If analytics category is disabled => disable google analytics
        if (!cc.allowedCategory('analytics')) {
            typeof gtag === 'function' && gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage':'denied'
            });
        }else{
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-2RR5XRNY1R');
        }
        window.location.reload();
    },

    languages: {
        'de': {
            consent_modal: {
                title: 'Unsere Cookies verbessern Ihr Besuchererlebnis!',
                description: 'Sie werden auch für die technische Umsetzung unserer Seite verwendet. Alle Einzelheiten zu unseren Cookies finden Sie in unserer Datenschutzerklärung. Sie haben jederzeit die Option, in den Cookie-Einstellungen optionale Cookies abzulehnen.',
                primary_btn: {
                    text: 'Zustimmen',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Cookie-Einstellung',
                    role: 'settings'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Erweiterte Cookie-Einstellungen',
                save_settings_btn: 'Auswahl speichern',
                accept_all_btn: 'Zustimmen',
                reject_all_btn: 'Alle ablehnen',
                close_btn_label: 'Abbrechen',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Dauer'},
                    {col4: 'Beschreibung'}
                ],
                blocks: [
                    {
                        title: 'Cookie-Nutzung 📢',
                        description: 'Wir verwenden Cookies, um die Grundfunktionen der Website sicherzustellen und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie festlegen, ob Sie sich jederzeit anmelden oder abmelden möchten. Weitere Einzelheiten zu Cookies und anderen sensiblen Daten finden Sie in der vollständigen <a href="/datenschutz" class="cc-link">Datenschutzerklärung</a>.'
                    }, {
                        title: 'Notwendige Cookies',
                        description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren meiner Website unerlässlich. Ohne diese Cookies würde die Website nicht ordnungsgemäß funktionieren.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Leistungs- und Analytics-Cookies',
                        description: 'Diese Cookies ermöglichen es der Website, sich an die von Ihnen in der Vergangenheit getroffenen Entscheidungen zu erinnern.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 Jahre',
                                // col4: 'description ...',
                                is_regex: true
                            },
                            // {
                            //     col1: '_gid',
                            //     col2: 'google.com',
                            //     col3: '1 day',
                            //     col4: 'description ...',
                            // }
                        ]
                    }, {
                        title: 'Werbe- und Targeting-Cookies',
                        description: 'Diese Cookies sammeln Informationen darüber, wie Sie die Website nutzen, welche Seiten Sie besucht und welche Links Sie angeklickt haben. Sämtliche Daten werden anonymisiert und lassen keinen Rückschluss auf Ihre Person zu.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Mehr Informationen',
                        description: 'Bei Fragen zu unserer Richtlinie zu Cookies und Ihren Auswahlmöglichkeiten kontaktieren Sie uns bitte. <a class="cc-link" href="mailto:info@quilar.de">Kontakt</a>.',
                    }
                ]
            }
        }
    }
});