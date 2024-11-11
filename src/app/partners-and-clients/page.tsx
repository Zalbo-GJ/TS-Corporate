// src/app/partnersANDclients/page.tsx

import React from "react";

const PartnersAndClients = () => {
  const othersAndManyMore = [
    "AATF PLC Construction Materials Industry",
    "Abbas Hussien Soap Detergent and Perfume Factory",
    "Abdulazis Jarra Marfa Food Compex",
    "Abdulfetah Sultan Garment Factory-Sebeta",
    "Abdulhakim Mohammed Packing Materials",
    "Abdulmelik Soaps and Detergent Mfg Project",
    "Abebe Diriba Dairy Farm and Milk Processing",
    "Abiy Dires Dry Coffee Processing Project",
    "Abyssinia Slaughter House Service PLC",
    "Abyssinia Technology Adaptation Center PLC",
    "Adamu Birhanu Dry Coffee Processing",
    "Addis Ababa Housing Construction Project House",
    "Adisho Tussie Beans Cleaning and Canning",
    "Ahadukes Foods Products Mfg",
    "Ahmed Beshir Flour Mill and Food Complex",
    "Ahmed Fereja Flour Mill Factory",
    "Ahmed Nuredin Sopas Project",
    "Ahmeddin Mohamed Medical Instruments",
    "Ahwan Food Complex",
    "Akhamad Sharif El Badavi Jewellery and Related Articles",
    "Akrem Mohammed Poultry Farm and Meat Processing Project",
    "Al Kaboos Mineral Water PLC-Burayyu",
    "Albar Trading PLC EMP",
    "Al-Doofa Industrials PLC",
    "Alem International PLC Food Complex",
    "Alemayehu Nigussie Five Star Hotel",
    "Alemu Mamo Dairy Farm and Agro Processing",
    "Alfred Temam Yusuf PVC, Conduits, Pipes and Pipes Accessories Proejct",
    "Al-Hassan Food Industries PLC",
    "Ali Allumani Irrigation Pipes",
    "Ali Buser Plastic Products Manufacturing Factory",
    "Allied Chemicals PLC",
    "Al-Lode Trading Enterprise (Flour Factory)",
    "Almaz Baby Food Factory",
    "Almaz Edosa Crop Production",
    "Almaz Soap and Detergent Production Project",
    "Al-Mehadi Match PLC",
    "Alpha Trading Partners Pulses and Oilseeds",
    "Alumashu General Trading PLC-Wet Coffee-Guji",
    "Amare Abreha Plastic Products Factory",
    "Anbesse Nuri Coffee Farm Project",
    "Andualem Birhane Dairy and Milk Processing",
    "Anteneh Meselle Automobile Assembly and Auto Parts mgf",
    "Anuwar Ahimed Dry Coffee Processing Project",
    "Arba & Tiryaki Grain and Pulses Industry Ethiopia PLC",
    "Arbaminch Textile Industry",
    "Armonium Aluminum kitchenware",
    "ART Crafts Industries PLC Printing Dukem",
    "ART Crafts Industries PLC Soap and Detergent",
    "Asamenew Metal Workshop",
    "Asmi Industry-Surgical Dressing Materials and Disinfectant Mfg",
    "Asrat Nurga Office Equipment and Furniture Mfg",
    "Assasa Natural Spring Bottling",
    "Auto Leaf Factory",
    "Avis General Business PLC Soap and detergent",
    "Awash Auto Batteries PLC",
    "Awash Falls Lodge PLC",
    "Awfat Food Complex Factory",
    "Ayat Real Estate PLC (Marble Production)",
    "Baharu Abreha Plastic and Steel mfg Sebeta",
    "Bati Laundry Soaps and Detergent Prd. Project",
    "Belete Tesfa Bule Dry Coffee Processing Project",
    "Belima International Buisness PLC",
    "Bezu Beyene Production of Pulses, Cereals, and Oilseeds for Export",
    "Bezu Vegetables Processing Plant and Seed Germination",
    "Birru Bacha Food Processing Complex",
    "Bitaniya Industrial Felxible Foam",
    "Blue Sky Farm PLC",
    "BMG Textile and Leather Factory",
    "Bore Buna PLC Wet and Dry Coffee Processing at Gembe",
    "Bore Buna PLC Wet and Dry Coffee Processing at Toba",
    "BS Root Chlorex Manufacturing PLC",
    "Bulukse Coffee Pulping PLC",
    "Bure Buna PLC (Metal Industry)",
    "C&E Steel Industry PLC",
    "Caravan International Business House PLC",
    "CGF Bussiness Group PLC",
    "CH Clinker Manufacturer PLC",
    "Cherinet Asfaw Dry Coffee Processing Plant",
    "China-Africa Overseas Leather Products S.C",
    "Cosmetics Products Mfg/Net-Ways Intl",
    "Crown Cork Manufacturing Plant Project",
    "Crown Cork Manufacturing Project",
    "Crown Packaging and Plastics PLC",
    "Crown Packaging and Plastics PLC Bishoftu",
    "CZ Industrial Group PLC",
    "Dae Agro Industry PLC Flour Factory",
    "Dagne Nagewo Balcha Quarry Project",
    "Dalol Transit Service PLC-Abattoir Mojo",
    "Damot industrial and commercial PLC water bottling",
    "Danbala Microenterprise Wood and Wood Project",
    "Dodi Poultry Farming",
    "Dong Fang Resource Recycling Development PLC",
    "Double S Canvas Mfg Project",
    "Double S Plastic Mfg Project",
    "DSF International Trade Enterprise (Chemical Manufacturing)",
    "Ecotopia Waste Recycling PLC",
    "Elegant Interior Design Engineering PLC",
    "Elemtu Integrated Milk Industry S.C.",
    "Elilly Five Star Hotel Resort Bishoft",
    "Elsa Kolo",
    "EMA Fruits and Vegetables Farm",
    "Eng Kassa Teshome Food Processing Project",
    "Eng Zelalem Wet Coffee Pulping PLC",
    "Enriched Foods Processing Factory",
    "Eskinder Kebede Structural Metal and Steel Products-Dukem",
    "Esmael Obse Coffee Plantation and Cereal Development",
    "ETCA International Hospital PLC",
    "Ethio-General Contractor Garage",
    "European Food and Cattle PLC",
    "Everest Iron and Steel PLC",
    "EYA Textile Industry PLC",
    "FeedsCo - Animal Feeds PLC",
    "Fekadu Haile Wet Coffee Processing",
    "Fekede Kenea Coffee Plantation",
    "Fikadu Abdeta Dry Coffee Processing Project",
    "Fikadu and Ayele Dry Coffee Processing",
    "Fikadu Tarekegn Coffee Plantation",
    "Fikir Food Processing Complex Adama",
    "Fine Chemical General Trading PLC Medical Equipment and Supplies",
    "Finfinne Tire Retreading PLC",
    "Fisaha Hizikias Seed Cleaning and Exporting EMP",
    "Gadeb Agro Industry PLC Foods Complexes",
    "Galama Wood and Wood Products",
    "Gena Kasim Flour Pasta Macaroni and Biscuit Factory",
    "Gena Kasin Vegetables Farm Jeju District",
    "Genu Meda Food Complex",
    "Getachew Tesfaye Brush Mfg",
    "Getahun Shibiru Wet Coffee Processing",
    "Getahun Shibiru Wet Coffee Processing-Goga Kemissie",
    "Girma Birru Purified Water Bottling",
    "Girma Dina Coffee and Agricultural Farm",
    "Girma Dina Dry Coffee Hulling Project",
    "Golf Food Processing PLC",
    "Haatau Dairy Project Gorfo Town",
    "Habtemichael PLC plastics and PVC",
    "Haile Maternal & Health Care Center",
    "Hakfen Trading PLC",
    "Hamid Metal and Metal Related Products Mfg",
    "Hanure Manufacturing PLC",
    "Helen Agro Industry Dairy Project",
    "Hirbora Bottling Plant",
    "Holeta Honey and Honey Products/Oromai Coffee Farmers",
    "Holeta PPGI Roof Tiles",
    "HSK Import-Export PP Bags",
    "HSSH Trading Industry PLC",
    "Imad Doj Poultry Farm",
    "Integrated Health Group",
    "Irrigation Pipes, Conduits Fittings and PVC Materials Mfg",
    "Isma'el Tussa Food Firm on Wheat Floor Processing Factory Project",
    "Jarbo Soap Factory PLC",
    "Jenef General Trading Corrugated Paper Box",
    "Kadisco Paints S.C.",
    "KAM Ceramics Products",
    "Kanoseb Manufacturing and Trading PLC",
    "Kasagne Aregahagne Soap Factory",
    "Kasahun Worku Irrigated Oilseeds Development",
    "Kazale Agro Industry Cattle Fattening and Meat Processing",
    "Kebede Furgassa Edible Oil Factory",
    "Kefele Belachew Fuel Station",
    "Kehama Business Development PLC",
    "Kemer Hussein Animal Fatenning",
    "Kermelos Agroindustry PLC",
    "Khalid Umar Food Complexe Shashamane",
    "Kibkab General Trading PLC (Food Complex)",
    "Kibkab PLC (Wet and Dry Coffee Mizan)",
    "Kibkab PLC Dry Coffee Processing",
    "Kiros Gebru and Mizbaw Shasho Dry Coffee PP",
    "KOJJ Food Complex",
    "Kukulu Animal Feed Processing PLC",
    "Kunifira Agro-Processing PLC",
    "Kunifira Agro-Processing PLC Expansion",
    "Luxury and Popular PLC Soap and Detergent",
    "M.W.Dh Construction Materials",
    "Magaday Business PLC",
    "Mahider Aymiro Animal Feed Manufacturing Plant Sululta",
    "Maruti Plastic Industry PLC",
    "Mebratu Ume Kelecha Gypsum Powder Mfg",
    "Medical Gloves Mfg Plant",
    "Medtck Ethiopian PLC",
    "Mekbib Asefa Packaging Cans Mfg Factory",
    "Mekbib Melke Rubber Manufacturing",
    "Mekonnin Wolelaw Leather Garment and Shoe Factory",
    "Mekuria Nail and Corrugated Iron Factory",
    "Mekuriya Melka Plastic Factory",
    "Melat Coffe Farm Dvt PLC",
    "Melka Printing and Packing Factory",
    "Melkamu Bobo Coffee Plantation",
    "Meselech Alemu Dry Coffee PF",
    "Meseret PLC Food Complex",
    "Mesfin Tadesse Cattle Rearing",
    "Meshesha Ayansa Oilseeds and Pulses Cleaning and Processing",
    "Metrolux Flower PLC Vegetable Production",
    "Miawa Import and Export Water Bottling",
    "Milto Real Estate",
    "Misikir Geremew Coffee Plantation",
    "Mitiku Bedasa Dry Coffee Processing Project",
    "MM Bedding Industries PLC-Foam Mfg",
    "Mobica Aluminium and Furniture Industry PLC",
    "Mohammed Abbagidi Wet Coffee Processing",
    "Mohammed Bakar Edible Oil Factory",
    "Mohammed Hussen Beyan Oil Seeds and Cereals Cleaning Enterprise",
    "Mohammed Ibrahim Agricultural Development Investment",
    "Mohammed Kassim Tufe Soap and Detergent",
    "Mohammed Kedir Crop Production Project",
    "Mohammed Seid Food Complex Factory",
    "Muktar Ababiya Crop Production",
    "Mulan Food Complex PLC",
    "Mulat Arega Garment Factory",
    "Mulatu Mulugeta Wet Coffee Pulping PLC",
    "Multeqa Shaffila Real Estate Development PLC",
    "Multeqa Shaffila Real Estate Development PLC",
    "Mulu Abebe Poultry Farm",
    "Muna Harun Food Complex Shashemene",
    "Musa Roba Kinkal Food Complex",
    "Mustefa Musa Dry Coffee Processing",
    "Negati Tetile Factory PLC",
    "Nesiha Manufacturing PLC",
    "New Flower General Trading PLC",
    "Nigussie Daba PVC Materials",
    "NJ Decha Soaps and Candles PLC",
    "Oil Asia PLC",
    "Omer Mohammed Crop Production Arsi",
    "Packaging Materials Mfg",
    "Paper Product Production Project",
    "Petram PLC-Soap and Detergent Factory",
    "Petram PLC-Water and Juice Bottling Project",
    "Petronas PLC Gambella Drilling Site",
    "PP Packing Industry",
    "PP Woven Bag Mfg Plant",
    "Psqua Guiseppe Iron Steel and Aluminum",
    "PVC Pipes and Fittings",
    "Rabbera Edible Oil Manufacturing Industry",
    "Raj Agri-Business PLC-East Wollega",
    "River Action for Multi-Activities Ltd Ethiopian Branch",
    "Robera PLC Coffee Plantation",
    "Roda Business Grp Agricultural Tools and Metal Industry",
    "Ropack PLC",
    "S&U General Trading PLC Animal Fatenning",
    "S&U General Trading PLC Food Complex",
    "S&U General Trading PLC Fuel Station and Motel Service",
    "S&U General Trading PLC Laundry Soap and Det Mfg Project",
    "Satellite Industry PLC, Roof Tiles",
    "Seid Damtaw Coffee Processing Project",
    "Seid Damtew Textile Garment Factory",
    "Sendafa General Business PLC Woodwork and Furniture",
    "Shaka Gurmessa Five Stars Hotel Resort",
    "Shemsu Abrara Purified Water Bottling Project",
    "Shewaye Dese Wet and Dry Coffee Processing Project",
    "Shibaher Gelan Foam Mfg",
    "SHS Industrial and General Business PLC Baby Foods",
    "Sintayehu Nesibu PLC-Maintennce Garage",
    "Sirak Gurmu Soap Mfg",
    "Sisay Baharu Flour, Pasta and Macaroni Factory",
    "Sisay Tamirat Vegetable Farm",
    "Soten Industrial Engineering PLC-Metal",
    "Star Business Group PLC Iron Sheet",
    "Stone Coated Roof Tiles Mfg",
    "Sun Packaging PLC",
    "Sunshine Construction PLC Dukem",
    "Sur Construction PLC",
    "SUZO Corrugated Paper Board Mfg",
    "Tadele Megersa Irrigated Fruits and Vegetables",
    "Tadesse Filate Mineral Water Bottling Project",
    "Tamene Gobena Corrugated Iron Sheet and Nail Manufacturing Project",
    "Tedla Abraham Organic Coffee Plantation",
    "Tefera Shibeshi Flour Factory",
    "Tekeste Berhane Gebreyesus Garment Factory",
    "Teklebrahan G/tinsae Polyurethane Foam manufacturing",
    "Teklu Getachew Dairy and Milk Processing Project",
    "Teshome Dele Construction Materials Manufacturing Industry",
    "Teshome G-Mariem Animal Fattening and Export Project",
    "Tilahun Azeze Food Processing Plant",
    "To Mo CA Coffee PLC",
    "Transsion Manufacturing PLC (Tecno Mobile)",
    "Tsehay Feleke and Family Trading PLC",
    "TTK Laundry Soap Manufacturing Project",
    "Tullow Oil PLC Airstrip Arbore",
    "Tullow Oil PLC Chew Bahir/Chalbi Drilling Sites",
    "Tullow Oil PLC Gardim-Chew Bahir-Kesami Acess Roads",
    "Tullow Oil PLC SEA (Kenya and Ethiopia sites)",
    "Tullow Oil PLC Woito Valley Drilling Site",
    "UAB Agro Industry PLC Spice Production",
    "Ulmay PLC Dry Coffee Hulling Project",
    "United VASn Leather PLC",
    "Unity Trading PLC",
    "Universal Foam Manufacturing Group PLC",
    "Viva Natural Mineral Water Project AA",
    "WABON Trading PLC/Farm",
    "Walellegn Melak Soap and Detergent Factory",
    "Weldeyesus Business PLC-Dry and wet Coffee processing",
    "Welkassa Industry PLC",
    "Workinesh Gessese General Exporter-Oilseeds",
    "Worku Adimasu Laundry Soaps Mfg Project",
    "Yakla Milk and Milk Products Trade Private Enterprise",
    "Yemekab General Importer and Exporter PLC",
    "Yibelu Mossiewa Soap and Detergent Factory",
    "Yonas Bayisa Dry Coffee Processing Project",
    "Yonas Lema Plastic Products",
    "ZAM-FAM Trade and Industry PLC Metal and Wood",
    "Zekarias Fuel Station and Motel Services",
    "Zelalem Solomon Vegetable Farm",
    "Ziway Ecolodge",
    "And many more ……………………………….",
  ];
  return (
    <div className="min-h-screen p-5 md:p-16  bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Our Clients and Partners</h1>{" "}
      <div className="flex flex-wrap   gap-4 mb-8">
        {Array.from({ length: 33 }, (_, index) => (
          <img
            key={index}
            src={`/images/p${index + 1}.png`}
            alt={`Image ${index + 1}`}
            className="h-12 md:h-24 "
          />
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4">
        Clients and Partners in Different Places
      </h1>
      <ol className="list-decimal pl-5 mb-8 text-sm">
        <li>FDRE Ministry of Trade and Industry</li>
        <li>FDRE Ministry of Innovation</li>
        <li>FDRE Ministry of Environment, Forest and Climate Change</li>
        <li>Addis Ababa City Administration</li>
        <li>
          Oromia Environmental Protection Authority and its Branch Offices
        </li>
        <li>Addis Ababa Environmental Protection Authority</li>
        <li>
          Amhara Region Environmental Protection Authority and its Branch
          Offices
        </li>
        <li>Dire Dawa City Administration</li>
        <li>Leather Industry Development Institute</li>
        <li>FDRE Industrial Parks</li>
        <li>National Metereology</li>
        <li>Debre Berhan Industrial Park</li>
        <li>Kilinto Industrial Park</li>
        <li>Bole Lemi Industrial Park</li>
        <li>OiLibya Ethiopia Limited</li>
        <li>Techno Mobile</li>
      </ol>
      <Section
        title="Cement Industries"
        items={[
          "Derba Cement Factory",
          "Dangote Cement S.C.",
          "Messebo Cement Factory",
          "Mugher Cement Factory",
          "National Cement Factory",
          "Jema Cement Factory",
          "Inchini Bedrock Cement PLC",
          "East Cement share company",
        ]}
      />
      <Section
        title="Basic Chemical Industries"
        items={[
          "Abjata Soda Ash S.C.",
          "Awash Melkassa Aluminium Sulphate and Sulfuric Acid S.C",
          "Caustic Soda Share Company",
          "Adami Tulu Pesticides Processing Share Company",
          "Addis Ababa Bottle and Glass Share Company",
          "Tabor Ceramic Factory",
        ]}
      />
      <Section
        title="Leather Industries"
        items={[
          "George Shoe Ethiopia PLC",
          "Elico –Awash Tannery",
          "Sheba Tannery",
          "Modjo Tannery",
          "Pittards (Ethiopian Tannery)",
          "China Africa Tannery",
          "East African Tannery",
          "Friend Ship Tannery",
          "Farida Tannery",
        ]}
      />
      <Section
        title="Textile Industries"
        items={[
          "Ayka Addis Textile and Investment Group",
          "Almeda Textile Factory",
          "Sayigandima Textile S.C.",
          "Al-Mehdi Industry PLC",
          "AL-Asar Industry PLC",
          "Huwaksu Textile Factory",
          "Dongfang Spinning and Dyeing Factory",
          "MAA Garment and Textile Factory",
          "MNS Manufacturing",
          "Hawassa Textile S.C",
        ]}
      />
      <Section
        title="Beverage, Food, and Pharmaceutical Industries"
        items={[
          "Meta-Abo Brewery",
          "Addis Mojo Edible Oil Factory",
          "Zenith Gebes-Eshet Ethiopia Ltd",
          "Ethiopian Pharmaceutical Manufacturing",
          "National Alcohol Factory",
          "Awash Winery Factories",
          "Petram Factory",
          "IMCO-Agro-Industry PLC",
          "Genesis Farms",
        ]}
      />
      <Section
        title="Metal Industries"
        items={[
          "Habesha Steel Mills PLC",
          "Ethiopian Iron and Steel factory",
          "Pagric Ethiopia",
          "Inter Africa Aluminum Extrusion",
          "Nigat Mechanical Engineering",
          "C & E Brothers Steel Mill PLC",
          "Steel R.M.I PLC",
          "Ethiopian Leaf Spring",
        ]}
      />
      <h2 className="text-xl font-semibold mb-2">Others and Many More</h2>
      <table className="table-auto w-3/4 mb-8">
        <thead>
          <tr>
            <th className="px-2 py-1">Company Name</th>
          </tr>
        </thead>
        <tbody>
          {othersAndManyMore.map((company, index) => (
            <tr key={index} className="border-t">
              <td className="px-9 py-1 text-xs md:text-sm">{company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <ul className="list-disc pl-5 text-sm">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default PartnersAndClients;
