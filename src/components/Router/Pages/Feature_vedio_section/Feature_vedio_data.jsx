import fvd1 from '../Card_img/f_vd1.jpg';
import fvd2 from '../Card_img/f_vd2.jpg';
import fvd3 from '../Card_img/f_vd3.jpg';
import fvd4 from '../Card_img/f_vd4.jpg';
import fvd5 from '../Card_img/f_vd5.jpg';
import fvd6 from '../Card_img/f_vd6.jpg';
import fvd7 from '../Card_img/f_vd7.jpg';
import fvd8 from '../Card_img/f_vd8.jpg';
import fvd9 from '../Card_img/f_vd9.jpg';
import fvd10 from '../Card_img/f_vd10.jpg';
import fvd11 from '../Card_img/f_vd11.jpg';
import fvd12 from '../Card_img/f_vd12.jpg';
export const sl_data=[
    {
        f_img:fvd1,
        v_heading:'Terran Orbital Corp (NYSE: LLAP) Q1 2023 Financial Results' 
    },
    {
        f_img:fvd2,
        v_heading:'Elon Musk Tweet Sends $LADYS (Milady Meme Coin) to the Moon' 
    },
    {
        f_img:fvd3,
        v_heading:'BriaCell Therapeutics Corp | Bria-MT™ | (NASDAQ: BCTX) (TSX: BC ...' 
    },
    {
        f_img:fvd4,
        v_heading:'Top 10 Crypto | May 2023 | RICH TV LIVE PODCAST' 
    },
    {
        f_img:fvd5,
        v_heading:'Top 10 Stocks for May 2023 | RICH TV LIVE PODCAST' 
    },
    {
        f_img:fvd6,
        v_heading:'CULT Food Science | (CSE: CULT) (OTC: CULTF) (FRA: LN0) | RICH TV ...' 
    },
    {
        f_img:fvd7,
        v_heading:"Swiss Cheese | The world's first ever decentralized stock exchang ..." 
    },
    {
        f_img:fvd8,
        v_heading:'New Milestone | NEO Battery Materials Ltd | (TSXV: NBM) (OTCQB: N ...' 
    },
    {
        f_img:fvd9,
        v_heading:'Leocor Gold Inc. | (CSE:LECR)(OTC:LECRF)(FRA:LGO) | CEO Alex Klen ...' 
    },
    {
        f_img:fvd10,
        v_heading:'Riverside Resources (TSXV:RRI) (OTCQB:RVSDF) (FSE: 5YY) | Appoint ...' 
    },
    {
        f_img:fvd11,
        v_heading:'Bitcoin price prediction | Digital Bank | @Ledger nano x | @RICHT ...' 
    },
    {
        f_img:fvd12,
        v_heading:'Top 10 Crypto for April 2023 | RICH TV LIVE PODCAST' 
    }
];
export const btn={
    value:"View all",
}
let optionsDate = 
{ 
    // weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
};
export const latest_date=new Date().toLocaleDateString('en-US',optionsDate);