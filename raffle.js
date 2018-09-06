var randomname = require('node-random-name');
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop();
var rn = require('random-number');
var sizes = ['4','4.5','5','5.5','6','6.5','7','7.5','8','8.5','9','9.5','10','10.5','11','11.5','12','12.5','13'];
var randsize = sizes[Math.floor(Math.random() * sizes.length)];
var tasks = '100'
var email = rn + '@' + 'omni.supply';
var APIkey = ('741cac275437c904464c56ea7f9029b0')
var GoogleKey = ('6LfvWSkTAAAAADaNXdaD3h0gcFwi_lCW8W7RjwXZ')
var PageURL = ('https://sesinko.com/pages/online-raffle-air-jordan-i-homage-to-home')
const { csvFormat } = require('d3-dsv');
const Nightmare = require('nightmare');
const nightmare = Nightmare({show: false});
const { readFileSync, writeFileSync } = require('fs');

headers = {'User-Agent':
           'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'}


console.log('entering account')

Nightmare
    .goto('https://sesinko.com/pages/online-raffle-air-jordan-i-homage-to-home')
    .wait('#search-results')
    .insert('input[name="First Name"]', randomname)
    .insert('input[name="Last Name"]', randomname)
    .insert('input[name="City"]','New Haven')
    .insert('input[name="State"]','Conneticut')
    .insert('input[name="email"]', email)
    .select('selector[name="Size (US)"]', randsize)



##Request Captcha##

public string SendCaptcha(string APIKey,string GoogleKey,string PageURL)
{
    #region Captcha Solve
    try
    {
        #region POST
        System.Net.ServicePointManager.Expect100Continue = false;
        var request = (HttpWebRequest)WebRequest.Create("http://2captcha.com/in.php");

        var postData = "key="+APIKey+"&method=userrecaptcha&googlekey="+GoogleKey+"&pageurl="+PageURL; 
        var data = Encoding.ASCII.GetBytes(postData);

        request.Method = "POST";

        request.ContentType = "application/x-www-form-urlencoded";
        request.ContentLength = data.Length;

        using (var stream = request.GetRequestStream())
        {
            stream.Write(data, 0, data.Length);
        }

        var response = (HttpWebResponse)request.GetResponse();

        var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
        #endregion

        #region GET
        if (responseString.Contains("OK|"))
        {
            string results = responseString.Replace("OK|", "");
            return results;
        }
        else
        {
            return "Error";
        }
        #endregion
    }
    catch (Exception e)
    {
        string tt = e.Message;
        return tt;
    }
    #endregion
}

console.log('requested captcha')

##Inject Captcha##

var postData = "key="+APIKey+"&action=get&id="+result;
var data = Encoding.ASCII.GetBytes(postData);

request.Method = "POST";

request.ContentType = "application/x-www-form-urlencoded";
request.ContentLength = data.Length;

using (var stream = request.GetRequestStream())
{
    stream.Write(data, 0, data.Length);
}

var response = (HttpWebResponse)request.GetResponse();

var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
#endregion

#region GET
if (responseString.Contains("OK|"))
{
    string results = responseString.Replace("OK|", "");
    return results;
}
else
{
    return "Error";
}
#endregion
}
catch (Exception e)
{
string tt = e.Message;
return tt;
}
#endregion
}

console.log('recieved captcha, submitting information')

Nightmare
    .click('button[type="submit"]')
}

console.log('entry submitted, restarting!')

/* add a loop */

