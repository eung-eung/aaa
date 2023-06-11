const fs = require('fs');
const {Builder, By, Key, until, Actions} = require('selenium-webdriver');
let data = ['https://www.fiverr.com/lana_sky', 'https://www.fiverr.com/katy63de', 'https://www.fiverr.com/radnorthwest', 'https://www.fiverr.com/loui8961', 'https://www.fiverr.com/seanviens', 'https://www.fiverr.com/katy63de', 'https://www.fiverr.com/nastiajanena', 'https://www.fiverr.com/photo_service', 'https://www.fiverr.com/fluffmedia', 'https://www.fiverr.com/abhinayjaiswal', 'https://www.fiverr.com/jeffbrianphoto', 'https://www.fiverr.com/nickstarichenko', 'https://www.fiverr.com/franja54', 'https://www.fiverr.com/mdmasumbd', 'https://www.fiverr.com/gkzaman07', 'https://www.fiverr.com/rakibuddintaj', 'https://www.fiverr.com/aslito', 'https://www.fiverr.com/janens_com', 'https://www.fiverr.com/mapkos13', 'https://www.fiverr.com/bozouk', 'https://www.fiverr.com/horosphotos', 'https://www.fiverr.com/aneliyakalcheva', 'https://www.fiverr.com/asad_ali9', 'https://www.fiverr.com/annahmeintz', 'https://www.fiverr.com/crispycreative_', 'https://www.fiverr.com/awill1ams', 'https://www.fiverr.com/k_katsu_70', 'https://www.fiverr.com/nikosthetakis', 'https://www.fiverr.com/av8photography', 'https://www.fiverr.com/evgeniiazlobina', 'https://www.fiverr.com/alexfelder', 'https://www.fiverr.com/shari_khan', 'https://www.fiverr.com/elijahodonnell', 'https://www.fiverr.com/bedger', 'https://www.fiverr.com/jeffbrianphoto', 'https://www.fiverr.com/industrit', 'https://www.fiverr.com/alexxkm', 'https://www.fiverr.com/cat_on_table', 'https://www.fiverr.com/keniaur', 'https://www.fiverr.com/sarinurkhotimah', 'https://www.fiverr.com/tahir_saleemi', 'https://www.fiverr.com/haxtorm_pix', 'https://www.fiverr.com/sofiatav', 'https://www.fiverr.com/thorseye', 'https://www.fiverr.com/bozouk', 'https://www.fiverr.com/nevdimitrova', 'https://www.fiverr.com/jan_samayoa', 'https://www.fiverr.com/asyas_kitchen_', 'https://www.fiverr.com/monorave', 'https://www.fiverr.com/claudiumihai01', 'https://www.fiverr.com/passionshake', 'https://www.fiverr.com/adicaofficial','https://www.fiverr.com/graphicsworld80', 'https://www.fiverr.com/daniellapins', 'https://www.fiverr.com/expert_92', 'https://www.fiverr.com/expert_999', 'https://www.fiverr.com/lookyourselfsho', 'https://www.fiverr.com/vclaudiu', 'https://www.fiverr.com/aboller', 'https://www.fiverr.com/oriyasan', 'https://www.fiverr.com/violetdrobakha', 'https://www.fiverr.com/elinabergs', 'https://www.fiverr.com/vclaudiu', 'https://www.fiverr.com/nata_kompaniets', 'https://www.fiverr.com/ertugergun', 'https://www.fiverr.com/mohin757', 'https://www.fiverr.com/shoriatsorif726', 'https://www.fiverr.com/flaviopzt', 'https://www.fiverr.com/ananovaria', 'https://www.fiverr.com/booang8898', 'https://www.fiverr.com/guavanaboy', 'https://www.fiverr.com/fawaz_95', 'https://www.fiverr.com/viewfrommypoint', 'https://www.fiverr.com/leighrayphoto', 'https://www.fiverr.com/rrsanchez76107', 'https://www.fiverr.com/vextoria', 'https://www.fiverr.com/theastudio', 'https://www.fiverr.com/ddvillaarino', 'https://www.fiverr.com/pathok', 'https://www.fiverr.com/filagrs', 'https://www.fiverr.com/leaninjowler', 'https://www.fiverr.com/merakimodel', 'https://www.fiverr.com/nevdimitrova', 'https://www.fiverr.com/pablosalgueiro', 'https://www.fiverr.com/sofiasupichaya', 'https://www.fiverr.com/killer_artist', 'https://www.fiverr.com/creativekonain', 'https://www.fiverr.com/pro_service08', 'https://www.fiverr.com/bira_logos', 'https://www.fiverr.com/pr4me2', 'https://www.fiverr.com/ssksenia', 'https://www.fiverr.com/moodyspy', 'https://www.fiverr.com/amz4you1', 'https://www.fiverr.com/mattialuzzardi', 'https://www.fiverr.com/ivanmoshe', 'https://www.fiverr.com/grapicsolution', 'https://www.fiverr.com/bnotis', 'https://www.fiverr.com/iqrazee123', 'https://www.fiverr.com/bcvideopromo', 'https://www.fiverr.com/creator_express','https://www.fiverr.com/sofiasupichaya', 'https://www.fiverr.com/cat_on_table', 'https://www.fiverr.com/seanviens', 'https://www.fiverr.com/katy63de', 'https://www.fiverr.com/alexxkm', 'https://www.fiverr.com/oriyasan', 'https://www.fiverr.com/filagrs', 'https://www.fiverr.com/asad_ali9', 'https://www.fiverr.com/mdmasumbd', 'https://www.fiverr.com/grapicsolution', 'https://www.fiverr.com/ddvillaarino', 'https://www.fiverr.com/pablosalgueiro', 'https://www.fiverr.com/brianbornstein', 'https://www.fiverr.com/nikosthetakis', 'https://www.fiverr.com/fiverrwarrior', 'https://www.fiverr.com/bozouk', 'https://www.fiverr.com/samjanjua', 'https://www.fiverr.com/nastiajanena', 'https://www.fiverr.com/photo_service', 'https://www.fiverr.com/aslito', 'https://www.fiverr.com/nimzain', 'https://www.fiverr.com/evgeniiazlobina', 'https://www.fiverr.com/crispycreative_', 'https://www.fiverr.com/horosphotos', 'https://www.fiverr.com/nur_designs', 'https://www.fiverr.com/gfx_shahazad24', 'https://www.fiverr.com/pixtarcreations', 'https://www.fiverr.com/alexfelder', 'https://www.fiverr.com/amazon_grow99', 'https://www.fiverr.com/mattialuzzardi', 'https://www.fiverr.com/sohel_miah', 'https://www.fiverr.com/bira_logos', 'https://www.fiverr.com/martynasn', 'https://www.fiverr.com/mla_amsterdam', 'https://www.fiverr.com/aminocat', 'https://www.fiverr.com/aiellophoto', 'https://www.fiverr.com/flaviopzt', 'https://www.fiverr.com/alish_creator', 'https://www.fiverr.com/merakimodel', 'https://www.fiverr.com/leaninjowler', 'https://www.fiverr.com/pathok', 'https://www.fiverr.com/gkzaman07', 'https://www.fiverr.com/andrewforest', 'https://www.fiverr.com/sophiaperveshbd', 'https://www.fiverr.com/projectsinmind', 'https://www.fiverr.com/bcvideopromo', 'https://www.fiverr.com/janens_com', 'https://www.fiverr.com/mapkos13'];


class Studio {
    constructor(name, description, rating, services, avatar){
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.services = services;
        this.avatar = avatar;
    }
}
class ServicePack{
    constructor(name, description, price, rating, img, reviews){
        this.name = name;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.imgages = img;
        this.reviews = reviews;
    }
}
class Review {
    constructor(rating, content){
        this.rating = rating;
        this.content = content;
    }
}
const studioList = []
async function crawlData(url){
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(url);
        const studio = new Studio();
        studio.avatar = await driver.findElement(By.className('profile-pict-img')).getAttribute('src');
        studio.name = await driver.findElement(By.className('seller-link')).getText();
        studio.rating = await driver.findElement(By.className('rating-score')).getText();
        studio.description = await driver.findElement(By.css('.description > p')).getText();

        const cardList = await driver.wait(until.elementsLocated(By.className('gig-wrapper-impressions')), 10000);
        const servicePackList = []
        for (let i = 0; i < cardList.length; i++) {
            const card = cardList[i];
            const servicePack = new ServicePack();
            const gigCard = await card.findElement(By.css('h3>a'));
            gigCard.getAttribute('href').then(async(href) => {
                const servicePack = new ServicePack();
                const imgList = [];
                let popupDriver = await new Builder().forBrowser('chrome').build();
                await popupDriver.get(href);
                
                const data = await (await popupDriver.findElements(By.css('.thumbnail > img')));
                for(let i = 0; i < data.length; i++){
                    const img = data[i];
                    const imgLink = await img.getAttribute('src');
                    imgList.push(imgLink);
                }
                let price = await popupDriver.findElement(By.className('price')).getText();
                price = price.replace('$', '');
                price = parseInt(price) * 23.480
                // const name = await popupDriver.findElements(By.css('h1.text-display-3')).getText();
                // const rating = await popupDriver.findElements(By.css('.rating-score')).getText();

                const description = await popupDriver.findElement(By.css('div.description-content')).getAttribute('innerHTML');
                servicePack.imgages = imgList;  
                servicePack.name = await gigCard.getText();
                servicePack.description = description;
                servicePack.price = price //Math.floor(Math.random() * (10000000 - 1000000) ) + 1000000;
                let serviceRating = await card.findElement(By.css('.gig-rating')).getText();
                serviceRating = serviceRating.replace(/\(\d+\)/,'');
                servicePack.rating = serviceRating;
                
                var reviewList = [];

                const reviewContainer = await popupDriver.findElement(By.className('review-list'));
                const reviewItems = await reviewContainer.findElements(By.css('.review-item'));
                for (let i = 0; i < reviewItems.length; i++) {
                    const reviewContainer = reviewItems[i];
                    const review = new Review();
                    review.rating = await reviewContainer.findElement(By.className('rating-score')).getText();
                    review.content = await reviewContainer.findElement(By.css('.review-description > p')).getText();
                    console.warn(review);
                    reviewList.push(review);
                }
                // }
                servicePack.reviews = reviewList;
                servicePackList.push(servicePack);
                console.log("servicePackList")
                console.log(servicePackList);
                popupDriver.close();
            });
        }
        writeJsonFile(servicePackList);
        studio.services = servicePackList;
        console.log(studio.services);
        studioList.push(studio);
    } catch(err){
        console.error(err);
    }

}

function writeJsonFile(data, path="test.json"){
    fs.writeFile(path, JSON.stringify(data), 'utf8', (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
          return;
        }
        console.log('JSON file has been written successfully.');
      });
}
async function crawlAllData(){
    await crawlData('https://www.fiverr.com/lana_sky');
    await writeJsonFile(studioList, 'data.json');
}
crawlAllData();