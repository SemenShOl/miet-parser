const cors = require("cors");
const express = require("express");


const app = express();
app.use(cors());
const parse = async () => {
    const formData = new FormData();
    formData.append('group', 'ПИН-36')
   const resp = await fetch('https://www.miet.ru/schedule/data', {mode:'no-cors', method: "POST",headers: {cookie: `ITRIX_SM_user_group_referrer=YTowOnt9; BITRIX_SM_user_group_links=YTowOnt9; _ym_uid=170980303453007933; _ym_d=1709803034; adtech_uid=45aa9a1c-3731-49ba-a490-2477a3e8bee0%3Amiet.ru; top100_id=t1.512157.427248131.1709809009567; BX_USER_ID=36b2fe405a679cdbd3f98cd3c93f1e6d; wl=327b219d838c4228f7ab85bacadc09ce; MIET_PHPSESSID=3M40Q2IfN5DUhJEyT9x20EC4ZeqfVv5V; _ym_isad=2; last_visit=1710319916162%3A%3A1710330716162; t3_sid_512157=s1.859553291.1710327326995.1710330716168.6.5; sputnik_session=1710330707757|1
  `} ,body: formData} )
  return await resp.json(); 
}
app.get("/", async (req, res) => {
    res.json(await parse())
})

app.listen(3000, () => {
    console.log("server started")
})