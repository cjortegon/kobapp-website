const ANALYTICS_ID = 'UA-139875444-1'
// const IS_PROD = location.hostname !== "localhost" && location.hostname !== "127.0.0.1"

function startAnalytics() {
    if(window.ga === undefined) {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    }
    ga('create', ANALYTICS_ID, 'auto')
}

function sendGAEvent (category, action, label) {
    if(window.ga === undefined) return
    if(label === undefined) {
        console.log('ga.sendEvent', {category,action})
        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action
        });
    } else {
        console.log('ga.sendEvent', {category,action,label})
        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label
        });
    }
}
