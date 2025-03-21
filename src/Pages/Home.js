// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import dummyAuctions from '../Common/dummyAuctions.json';
import vase from '../assets/hunter.avif';
import bag from '../assets/mugalsbag.jpg';
import watch from '../assets/watch.webp';

import AuctionCard from '../Components/AuctionCard';
import BottomNavbar from '../Components/BottomNavbar';


function Home() {

    const dummyAuctions = [
        {
          id: 1,
          img: vase,
          name: "Royal Enfield",
          desc: "A classical and powerful bike to inhance your status",
          initialPrice: 5000,
          bidPrice: 7500
        },
        {
          id: 2,
          img: bag,
          name: "Royal Bag",
          desc: "A Royal bag that inhance your personality",
          initialPrice: 20000,
          bidPrice: 30000
        },
        {
          id: 3,
          img: watch,
          name: "Classic Wristwatch",
          desc: "A timeless classic wristwatch with leather strap.",
          initialPrice: 10000,
          bidPrice: 15000
        },
        {
            id: 1,
            img: vase,
            name: "Royal Enfield",
            desc: "A classical and powerful bike to inhance your status",
            initialPrice: 5000,
            bidPrice: 7500
          },
          {
            id: 2,
            img: bag,
            name: "Royal Bag",
            desc: "A Royal bag that inhance your personality",
            initialPrice: 20000,
            bidPrice: 30000
          },
          {
            id: 3,
            img: watch,
            name: "Classic Wristwatch",
            desc: "A timeless classic wristwatch with leather strap.",
            initialPrice: 10000,
            bidPrice: 15000
          }
      ];

    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        // Simulate fetching auction data from the JSON file
        setAuctions(dummyAuctions);
    }, []);
    return (
        <div className="container my-4">
            <h1 className="text-center mb-4" style={{color:'#d84e55'}}>Live Auctions</h1>
            <div className="row">
                {auctions.map((auction) => (
                    <div className="col-md-4" key={auction.id}>
                        <AuctionCard    
                            img={auction.img}
                            name={auction.name}
                            desc={auction.desc}
                            initialPrice={auction.initialPrice}
                            bidPrice={auction.bidPrice}
                        />
                    </div>
                ))}
            </div>
          
        </div>
    );
}

export default Home;
