$(document).ready(function () {
    $(".book-1").flipBook({
        pages:[
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c5305186cf672606a513_pickup-0-front.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d68b8ad6b67eb29a3985_thumb0-front.jpg", title:"PICK UP 表紙"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c5ca0e34982fdd35d114_pickup-0.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d68b49d1a7581815cafa_thumb0.jpg", title:"あの頃のかしわ"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c5c9088154fcafb3d7c0_pickup-1.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6b3dddc5f70a1901d4d_thumb1.jpg", title:"kamon"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c5ca49d1a71fb8104f42_pickup-2.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6b3808bdf530193d56c_thumb2.jpg", title:"UDC2"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c5cb49d1a79523104f43_pickup-3.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6b3dddc5fc87e901d63_thumb3.jpg", title:"柏二番街のゲンキモノ"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c5cb808bdf488a8e1f94_pickup-4.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6b5f0e2085c8d55811f_thumb4.jpg", title:"KEIHOKU / モンテローザ / CALDO / 佳佳苑"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c5cbd3a80fa93ac6b375_pickup-5.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6b48ad6b661c79a3a74_thumb5.jpg", title:"ABC-MART / いくこママズ / いしど画材 / 歌広場"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c6b08ad6b674e99473d5_pickup-6.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6b5a5a8d2c96adfd4df_thumb6.jpg", title:"Sapty Pepper's / ふりそで工房 / TSUTAYA / 山野楽器"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c6b00e3498b72435d778_pickup-7.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6b449d1a74f2315cc76_thumb7.jpg", title:"ドン・キホーテ"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c6b127484b74f5aa15af_pickup-8.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6b5dddc5fa945901d64_thumb8.jpg", title:"㈱成島組 / パーラーナルシマ / THE SUIT COMPANY / Zoff"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c6b1f0e208e6354ff3f0_pickup-9.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6b549d1a751ad15cc7f_thumb9.jpg", title:"アインズ&トルペ / ザッカセレクト / ピロースタンド"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea4c6b07899696fd3ca3258_pickup-10.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6b57899694d23d01a2b_thumb10.jpg", title:"柏二番街物語 Page 1"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea59ac549d1a74ce81407e1_pickup-11.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ee4b808bdf307e94a0b5_thumb11.jpg", title:"柏二番街物語 Page 2"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea59ac5808bdf910e920dba_pickup-12.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ee4cf0e20871dd561ad1_thumb12.jpg", title:"ウラカシ百年会物語"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea59ac5c07d7855a43bca67_pickup-13.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ee4ca5a8d253d8e08fdf_thumb13.jpg", title:"AKEBI", htmlContent:'<div class="btn__container"><a href="https://instagram.com/akebimen?igshid=1xa8hnuapnero" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea59ac608815410a5b7c49d_pickup-14.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ee4c088154daf3ba3acf_thumb14.jpg", title:"ameri chouchou", htmlContent:'<div class="btn__container"><a href="https://instagram.com/americhouchou?igshid=p22x3xlapymk" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea59ac6d3a80f047fca5bf3_pickup-15.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ee4cf0e208f83f561ad2_thumb15.jpg", title:"American Vape柏", htmlContent:'<div class="btn__container"><a href="https://instagram.com/americanvape_kashiwa?igshid=fcv728ejzxly" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5c589a5a8d2ac27df59de_pickup-16.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ee91dddc5f7fd490f150_thumb16.jpg", title:"FILTER", htmlContent:'<div class="btn__container"><a href="https://instagram.com/filter_kashiwa?igshid=dui6jonvgrwb" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5c58978996975a5cf79e0_pickup-17.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ee9249d1a77ea71681ec_thumb17.jpg", title:"BARBER SHOP MA-II", htmlContent:'<div class="btn__container"><a href="https://instagram.com/barber_shop_ma2?igshid=1t08js4q1i18s" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5c5897899691ddacf79df_pickup-18.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ee92dddc5f1e7b90f151_thumb18.jpg", title:"bon ami", htmlContent:'<div class="btn__container"><a href="https://instagram.com/kashiwa_bonami?igshid=1g5ozvg0wwumj" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5c58a49d1a770b115365d_pickup-19.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ee92808bdf7bc294a31d_thumb19.jpg", title:"Brille", htmlContent:'<div class="btn__container"><a href="https://instagram.com/brille_kashiwa?igshid=dukw01y36d1g" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5c58a5186cf2a2b0bda99_pickup-20.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ee920881541a32ba3b52_thumb20.jpg", title:"ROOF", htmlContent:'<div class="btn__container"><a href="https://instagram.com/diningbarroof?igshid=1m1kp1r5qc3u1" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5c5df789969ea87cf7b92_pickup-21.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ef22808bdf569594a4b7_thumb21.jpg", title:"Gleeful/Gleeful Cafe", htmlContent:'<div class="btn__container"><a href="https://instagram.com/gleeful_kashiwa?igshid=12sqvyg9nw1az" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5c5e070b505955145d97d_pickup-22.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ef2249d1a7491d1682c1_thumb22.jpg", title:"iii3", htmlContent:'<div class="btn__container"><a href="https://instagram.com/iii3_kashiwa?igshid=hpxu8velvonv" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5c5df7899692880cf7b93_pickup-23.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ef23808bdf4e4b94a4b9_thumb23.jpg", title:"Katarino...", htmlContent:'<div class="btn__container"><a href="https://instagram.com/katarino_store?igshid=1obcl30yaab9u" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5c5e00881543a65b8f8a6_pickup-24.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ef23dddc5f17f890f670_thumb24.jpg", title:"PEC", htmlContent:'<div class="btn__container"><a href="https://instagram.com/pec_kashiwa?igshid=1sdzzpgoq2ga8" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5c5e0f0e208edda54f4ce_pickup-25.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ef235186cf5a860d215f_thumb25.jpg", title:"st.valley house", htmlContent:'<div class="btn__container"><a href="https://instagram.com/st.valley_house?igshid=13wxymfrffqkq" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d520dddc5ff13b900f38_pickup-26.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ef9bc07d7821853e3e1c_thumb26.jpg", title:"SUPERTRAMP", htmlContent:'<div class="btn__container"><a href="https://instagram.com/supertramp_kashiwa?igshid=1e9uik0b4g96g" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d52127484b54f7af8d95_pickup-27.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ef9c78996942fed0cf9d_thumb27.jpg", title:"table beet", htmlContent:'<div class="btn__container"><a href="https://instagram.com/tablebeet_kashiwa?igshid=tl57v9gu91mi" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d520dddc5f6d14900f3a_pickup-28.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ef9c70b505d7714721ef_thumb28.jpg", title:"YOL Cafe Frosch"},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d521d3a80fec75cc3cdf_pickup-29.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ef9cd3a80f4f3dcd1b66_thumb29.jpg", title:"アーユーボーワン", htmlContent:'<div class="btn__container"><a href="https://instagram.com/a_yu_bowan?igshid=7njqs5mrcfhf" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d521808bdf49c793c764_pickup-30.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5ef9dc07d78d4b53e3e1d_thumb30.jpg", title:"ease", htmlContent:'<div class="btn__container"><a href="https://instagram.com/ease_takayanagi?igshid=1vxnb7pfskfdx" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d5adc07d789f553d8845_pickup-31.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d573a5a8d2d9addfca4b_thumb31.jpg", title:"まこどり", htmlContent:'<div class="btn__container"><a href="https://makodori.gorp.jp" target="_blank" class="rightbtn-hp"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 HP</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d5add3a80fb9d4cc3eb0_pickup-32.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d57370b50548c0466117_thumb32.jpg", title:"せい家", htmlContent:'<div class="btn__container"><a href="http://www.seiya.tokyo/" target="_blank" class="leftbtn-hp"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 HP</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d5ae49d1a7f52f15c785_pickup-33.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d573808bdf7deb93c97b_thumb33.jpg", title:"株式会社アビリティフォー", htmlContent:'<div class="btn__container"><a href="https://instagram.com/abilityfornext?igshid=1t1ae02mraajq" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d5ae808bdf9e6f93cd4c_pickup-34.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d57449d1a7adcf15bba2_thumb34.jpg", title:"古民家サロン SLOW", htmlContent:'<div class="btn__container"><a href="https://instagram.com/kominkasalonslow?igshid=1r7rtbhveqesg" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d5aed3a80f39cdcc3eb2_pickup-35.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d57478996946c2d00c58_thumb35.jpg", title:"刺繍 縫-nui-", htmlContent:'<div class="btn__container"><a href="https://instagram.com/nui_embroidery?igshid=1wiych1bk46ay" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d5f6a5a8d255a2dfcf28_pickup-36.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f01d5186cf23930d25ea_thumb36.jpg", title:"ゐまる", htmlContent:'<div class="btn__container"><a href="https://instagram.com/imaru1221?igshid=1jucd8tde9vrh" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d5f6d3a80f6ec4cc4092_pickup-37.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f01dc07d78f8ad3e411e_thumb37.jpg", title:"焼とり つかさ", htmlContent:'<div class="btn__container"><a href="https://instagram.com/yakitoritsukasa?igshid=1nuw0oimjeu7z" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d5f7c07d7874d03d8971_pickup-38.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f01d49d1a716e1168632_thumb38.jpg", title:"魚浜", htmlContent:'<div class="btn__container"><a href="https://instagram.com/sakana_kashiwa?igshid=10sznhjdv1yju" target="_blank" class="leftbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d5f927484b0c18af95de_pickup-39.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f01e8ad6b635789af77b_thumb39.jpg", title:"肉の大山", htmlContent:'<div class="btn__container"><a href="https://instagram.com/nikunooyamakashiwa?igshid=1u7kt0l4ghezi" target="_blank" class="rightbtn"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d5f7a5a8d2ee08dfcf2f_pickup-40.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f01e8ad6b6c7219af775_thumb40.jpg", title:"マチノイズミ / 千明スポーツ / 渡辺グループ", htmlContent:'<div class="btn__container"><a href="https://instagram.com/machinoizumi?igshid=enp52hkot1ol" target="_blank" class="leftbtn-machi"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div><div class="btn__container"><a href="https://watanabegroup.net" target="_blank" class="leftbtn-hp"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 HP</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d648d3a80f2d38cc40db_pickup-41.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f060dddc5f167290fac5_thumb41.jpg", title:"Koskimaa Deisgn / TOKIS DESIGN", htmlContent:'<div class="btn__container"><a href="https://instagram.com/yotatoki_official?igshid=f4j7h8ngwaut" target="_blank" class="rightbtn-tokis"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 Instagram</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div><div class="btn__container"><a href="https://www.koskimaa.com" target="_blank" class="rightbtn-hp-koskimaa"><div class="text" style="font-family: system-ui, sans-serif; font-weight: 700;">店舗 HP</div><img class="tap" src="https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f09a49d1a71940168864_tap.png"></a></div>'},
            {src:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5d6497899696b15d01571_pickup-42-back.jpg", thumb:"https://uploads-ssl.webflow.com/5a85a0563aa1e00001ebb98d/5ea5f0607899696347d0d27a_thumb42-back.jpg", title:"裏表紙"},
        ],
        lightBox:true,
        deeplinkingPrefix:"book1_",
        btnPrint:{enabled:false},
        btnDownloadPages:{enabled:false},
        btnDownloadPdf:{enabled:false},
        mobile:{shadows:false},
        btnExpand:{enabled:true, hideOnMobile:true}
    });

})
