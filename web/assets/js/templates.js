const templates = [
    {
        "title": "Creator",
        "image": "assets/images/templates/creators.png",
        "description": "Keep your comunity engaged with your content. Share, make room for your sponsors, make contests and more.",
        "link": "register.html?template=creator"
    },
    {
        "title": "Sports club",
        "image": "assets/images/templates/gym.png",
        "description": "Show the schedule of clases, enable your clients to make reservations. Allow them to register a credit card to pay the suscription, with no additional fees.",
        "link": "register.html?template=gym"
    },
    {
        "title": "Restaurant",
        "image": "assets/images/templates/restaurants.png",
        "description": "Delivery apps cut a lot of percent from the restaurant sales, and this makes your online presence too expensive. Give your customers an easy and engaging tool to order from physical locations, by delivery, or by the pickup model.",
        "link": "register.html?template=restaurant"
    },
    {
        "title": "Shipping",
        "image": "assets/images/templates/shipping.png",
        "description": "Move your transportation company to the next level, by offering tracking of packages, and tools to calculate the price of a service.",
        "link": "register.html?template=shipping"
    },
    {
        "title": "Lawyer's firm",
        "image": "assets/images/templates/lawyer.png",
        "description": "Give visibility to your customers. Show the firm's portfolio of services. Allow your clients to ask you for services via chat.",
        "link": "register.html?template=lawyer"
    },
    {
        "title": "Real State",
        "image": "assets/images/templates/realstate.png",
        "description": "Show the properties that you have for sale, with an organized place with specifications, videos and map indications. Allow the users to write questions for your sales force.",
        "link": "register.html?template=realstate"
    },
    {
        "title": "School",
        "image": "assets/images/templates/school.png",
        "description": "Connect to the students and parents. Send assignments and academic results. Show the school events and contacts list.",
        "link": "register.html?template=scholar"
    },
    {
        "title": "Laundry",
        "image": "assets/images/templates/laundry.png",
        "description": "Show the list of prices and give the users a method to request pick ups of laundry bags.",
        "link": "register.html?template=laundry"
    },
]

function loadHome() {
    loadCards("item service-item")
}
function loadGrid() {
    loadCards("col-lg-4 col-md-6 col-sm-6 item service-item")
}

function loadCards(classNames) {
    const section = document.getElementById('templates-section');
    section.innerHTML = templates.map(t => {
        return `<div class="${classNames}">
            <div class="icon">
                <i><img src="${t.image}" alt=""></i>
            </div>
            <h5 class="service-title">${t.title}</h5>
            <p>${t.description}</p>
            <a href="${t.link}" class="main-button">Start building</a>
        </div>`
    }).join('')
}

const questions = [
    {
        "question": "Is there a free trial?",
        "answer": `Kobapp is free until you publish, and you don't need to register a credit card. We have an app (Kobapp <span class="small-icon-span"><img src="assets/images/app-store.png"></img></span> <span class="small-icon-span"><img src="assets/images/play-store.png"></img></span>)
        where you can view your changes made in the admin panel instantly. This function is free forever. You just pay to publish your app to the Stores.`
    },
    {
        "question": "Do I need to code?",
        "answer": `Not a single line. And you also don't have to drag and drop anything, because our templates are ready to use out of the box. Just take care of the content and we publish your app in both stores
        <span class="small-icon-span"><img src="assets/images/app-store.png"></img></span> <span class="small-icon-span"><img src="assets/images/play-store.png"></img></span>`
    },
    {
        "question": "Can my app be available at multiple countries?",
        "answer": `You can select the list of countries where you what your app to be available with no extra cost.`
    },
    {
        "question": "Are there maintenance costs?",
        "answer": `Yes, after you purchase one template (the price depends on the features, check out the <a href="#services">templates</a>) and the app has been published, there will be charged an amount monthly, we currently don't offer annual plans, check out our <a href="pricing.html">pricing</a> section.`
    },
    {
        "question": "How to change the logo or colors from my app?",
        "answer": `If it is related to the content of your app is free, and you can do it by yourself from the admin panel. You only pay an extra 15 USD to re-compile and re-publish your app. This is because Apple and Google have to review this information and we need to take care in case they reject these changes. This applies to changes in logo, copies, colors, screenshots, or descriptions.`
    },
]
function loadFAQs() {
    const section = document.getElementById('questions');
    section.innerHTML = questions.map(q => {
        return `<article class="accordion">
            <div class="accordion-head">
                <span>${q.question}</span>
                <span class="icon">
                    <i class="icon fa fa-chevron-right"></i>
                </span>
            </div>
            <div class="accordion-body">
                <div class="content">
                    <p>${q.answer}</p>
                </div>
            </div>
        </article>`
    }).join('')
}
