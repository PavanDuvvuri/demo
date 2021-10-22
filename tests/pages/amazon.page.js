
  const NativePage = require('./native.page.js');
  const amazonPageData = require('../files/testData/amazon.data.js');
  
  class sampleHomePage extends NativePage {
  
    get webdriverIOHomePageElement() {
      return this.getPage('amazon.locators');
    }
  
      openamazonHomepage() {
      browser.url(amazonPageData['url'])
      console.log(browser.getTitle())
      expect(browser).toHaveTitleContaining('Amazon')
 
    }
  
    selectBasics(){
  
      const basics_seemore = $("//div[@id='desktop-grid-1']")
      console.log(basics_seemore.$$('a').length)
      console.log(basics_seemore.$$('a')[1].getText())
      console.log(basics_seemore.$$('a')[1].getAttribute('href'))
      expect(basics_seemore.$$('a')[1]).toHaveLinkContaining("amazonbasics")
      basics_seemore.$$('a')[1].click()
      
    }
  
    verifyBasics(){
  
      const basics_label = $("//div[@class='sg-col-inner']")
      let text = basics_label.$$('span')[2].getText()
      expect(basics_label.$$('span')[2]).toHaveAttribute('dir','auto')
      console.log(basics_label.$$('span').length)
      console.log("basics text::"+ text)
    }
  
    selectourBrand(){
  
     console.log(browser.$("//li[@id='p_n_feature_forty-seven_browse-bin/21180942011']").getAttribute('aria-label'))
    
     expect(browser.$("//li[@id='p_n_feature_forty-seven_browse-bin/21180942011']").$('a')).toHaveLinkContaining("amazonbasics")
     browser.$("//li[@id='p_n_feature_forty-seven_browse-bin/21180942011']").$('i').click()
      
  
    }
  
    selectProduct(){
      browser.pause(3000)
    // $("//div[@class='sg-col-inner']")[3].waitForDisplayed({ timeout: 3000 })
     let total_products = browser.$$("//div[@data-component-type='s-search-result']")
     console.log("total item::" + total_products.length)
     browser.pause(2000)
     for(let i=0;i<total_products.length; i++)
     {
       console.log(total_products[i].$('img').getAttribute('alt'))
       if(total_products[i].$('img').getAttribute('alt')==="Amazon Basics 8-Sheet Strip-Cut Paper, CD, and Credit Card Shredder")
       {
        total_products[i].click()
        console.log('title::'+ browser.getTitle())
        break
       }
     }
    }
  
    checkTitle(){

      browser.waitUntil(()=>(browser.getTitle()===('Amazon.com: Amazon Basics 8-Sheet Strip-Cut Paper, CD, and Credit Card Shredder'), { timeout:5000, timeoutMsg:'product page not opened' }))
      expect(browser).toHaveTitleContaining('Amazon Basics 8-Sheet') 
  
    }
    
    sheetcount(){
      $("//div[@id='productOverview_feature_div']").waitForDisplayed({ timeout: 3000 })
      console.log("sheet size:::"+ $("//div[@id='productOverview_feature_div']").$$('tr')[4].$$('td')[1].getText())
      expect($("//div[@id='productOverview_feature_div']").$$('tr')[4].$$('td')[1]).toHaveText('8')
     // expect($("//div[@id='productOverview_feature_div']")).toHaveAttribute("data-feature-name", "productOverview")
    }
   
    addtocart(){
      $("//input[@id='add-to-cart-button']").waitForDisplayed({ timeout: 3000 })
      $("//input[@id='add-to-cart-button']").click() 
      
    }
    
    cartcount(){

     $("//span[@id='nav-cart-count']").waitForDisplayed({ timeout: 3000 })
     console.log($("//span[@id='nav-cart-count']").getText())
     expect($("//span[@id='nav-cart-count']")).toHaveText('1')
    }
  
  }
  
  module.exports = sampleHomePage;
  