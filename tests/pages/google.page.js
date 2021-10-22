const NativePage = require('./native.page.js');
const googlePageData = require('../files/testData/google.data.js');
class sampleGetStartedPage extends NativePage {
  
  get webdriverIOGetStartedPageElement() {
    return this.getPage('google.locators');
  }
  
  opengoogleHomepage() {
    browser.url(googlePageData['url'])
    console.log(browser.getTitle())
    expect(browser).toHaveTitleContaining('Google')
  }

  googleSearch(){
    browser.pause(2000)
    const searchField =  browser.$("//input[@name='q']")
    searchField.waitForExist()
    searchField.setValue("Test Automation Learning")
    browser.pause(2000)
    const search_btn = browser.$("//input[@name='btnK']")
    search_btn.waitForExist()
    search_btn.click()
    browser.pause(3000)
  }

  selectUdemy(){

    let results = browser.$$('a')
    console.log(results.length)
    for(let x=0;x<results.length;x++)
    {
       if(results[x].getAttribute('href')==='https://www.udemy.com/topic/automation-testing/')
      {
        console.log(results[x].getAttribute('href'))
        results[x].click()
     
        break;
      }
      
    }
  }

  verifyUdemy(){
    browser.waitUntil(()=>(browser.getTitle()===('Top Automation Testing Courses Online - Updated [October 2021] | Udemy'), { timeout:5000, timeoutMsg:'product page not opened' }))  
    console.log("title:::"+browser.getTitle())
  }

  udemySearch(){
    $("//input[@name='q']").waitForDisplayed({ timeout: 3000 })
    browser.$("//input[@name='q']").setValue("BDD with cucumber")
    $("//button[@type='submit']").click()
    browser.pause(3000)
   
  }

  sortCourses(){
   // let ratings = browser.$("//div[@class='course-list--container--3zXPS']").$$("//span[@class='star-rating--star-wrapper--1QyBg']")
   browser.pause(2000)
   var ratings = $$("//span[@class='star-rating--star-wrapper--1QyBg']")
    console.log(ratings.length)
    var rating = [];
    var dict = {};
    for(let j=0;j<ratings.length;j++)
    {
      if(ratings[j].$$('span').length===2)
      {
        rating.push(ratings[j].$$('span')[1].getText())
        dict[rating[j]] = ratings[j].$$('span')[1]
         
      }
    }
    console.log(rating.sort(function(a, b){return b-a}))
    console.log(rating[0])
    for(let m=0;m<ratings.length;m++)
    {
      if(ratings[m].$$('span').length===2)
      {
        (ratings[m].$$('span')[1].getText()===rating[0])
        ratings[m].click()
        browser.pause(5000)
        break
         
      }
    }

  }

  selectCourse(){

    expect(browser).toHaveTitleContaining('Udemy')
  }
}


module.exports = sampleGetStartedPage;
