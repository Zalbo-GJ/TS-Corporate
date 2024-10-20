import Image from "next/image";
import TSFarmLogo from "../../../public/images/tsfarm-logo.png";
import Image1 from "../../../public/images/major-activity.png";
import Image2 from "../../../public/images/productsImage.png";
import Image3 from "../../../public/images/productImage2.png";
import Image4 from "../../../public/images/productImage3.png";
import Image5 from "../../../public/images/productImage4.png";
import Image6 from "../../../public/images/sustain1.png";
import Image7 from "../../../public/images/sustain2.png";
import Image8 from "../../../public/images/waste1.png";
import Image9 from "../../../public/images/waste2.png";
import Image10 from "../../../public/images/processing1.png";
import Image11 from "../../../public/images/processing2.png";
import Image12 from "../../../public/images/processing3.png";
import Image13 from "../../../public/images/processing4.png";
import Image14 from "../../../public/images/organogram.png";

export default function TSFarm() {
  return (
    <div className="min-h-screen p-24 bg-white">
      <div className="flex items-center space-x-4 mb-12">
        <Image src={TSFarmLogo} alt="TS Farm Logo" width={120} />
        <h1 className="text-4xl font-extrabold text-black">TS Farm</h1>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">Overview</h2>
        <p className="text-lg mb-6 text-gray-700">
          TS Farm (TSF) and Processing Company, founded in 2024, is a leading
          agricultural enterprise located in the Ambo District of the Oromia
          Region. We specialize in cultivating and processing high-quality
          fruits, vegetables, and saffron. Our commitment to sustainable farming
          and innovative processing techniques ensures that we deliver fresh,
          nutritious, and premium products to our customers.
        </p>
        <h1 className="text-5xl font-bold mb-6 w-[50rem] text-black flex space-y-10">
          THE EXCELLENCE OF A COMPETITIVE AND SUSTAINABLE BUSINESS MODEL
        </h1>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Farm Objective
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 px-9">
          <li>
            To produce high-quality, appropriate, affordable, and accessible
            services to our farmers and consumers.
          </li>
          <li>
            To add value to locally available raw materials and enhance our
            competitiveness.
          </li>
          <li>
            To raise and grow a sustainable and credible company able to deliver
            its mandate.
          </li>
          <li>
            To increase the output of fruits and vegetables farming in the
            national and international markets both in terms of quantity and
            quality for rapidly increasing demand.
          </li>
          <li>
            To create employment opportunities and generate income for the
            people in the farm area.
          </li>
          <li>
            To add value to the agro-processing sector of the nation by
            producing saffron, tomato paste, mango, avocado, and apple pulp.
          </li>
          <li>
            To generate income for the government in the form of income tax
            payments.
          </li>
          <li>
            To introduce/expand improved farming techniques to the surrounding
            farmers.
          </li>
          <li>To enhance agri-tourism.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Farm’s Socio-Economic Benefits
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700  px-9">
          <li>
            It produces and provides improved seeds of fruits and vegetables,
            particularly avocado, apple, tomato, potato, garlic, various
            cabbage, saffron, and strawberries for local farmers in the farm
            area and for export purposes.
          </li>
          <li>
            Provide fresh vegetables and fruit products and process quality and
            cost-effective fruits and vegetables using state-of-the-art
            technology.
          </li>
          <li>It creates employment opportunities for residents.</li>
          <li>
            It contributes to the government's income in the form of taxes.
          </li>
          <li>
            It utilizes community and local farmers' fruits and vegetable
            production for processing.
          </li>
          <li>
            It generates foreign currency for the nation when it starts
            exporting.
          </li>
          <li>Stimulate local economic activity.</li>
          <li>
            It has a technology spillover effect on similar projects and local
            farmers.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Farm Location
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          The farm is located in the Oromia Region, West Shoa Zone, Ambo
          District. The farm has a total of 100 hectares of land. The main
          justifications behind the selection of this location are:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-700 px-9">
          <li>
            Because of geographical location (i.e., near the largest market
            centers like Addis Ababa, Ambo, and Nekemte) the district has a
            great advantage for accessing the local products to the market. It
            creates ideal conditions for the provision of the demanded
            commodities to the local communities.
          </li>
          <li>
            Relatively advanced development in infrastructure (Power, Water,
            Telephone internet, road, etc.)
          </li>
          <li>All roads to the nearest market outlets.</li>
          <li>Availability of a huge skilled labor force.</li>
          <li>
            Availability of raw materials for fruit and vegetable production.
          </li>
          <li>Conducive investment policy and governance.</li>
          <li>
            Favorable climate and topography for fruit and vegetable production
            and processing.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Mission Statement
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          Our mission is to provide fresh, nutritious, and high-quality produce
          while maintaining sustainable farming practices that protect and
          enhance our environment.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Vision Statement
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          To be a global leader in the production and processing of premium
          fruits, vegetables, and saffron, fostering a healthy and sustainable
          future for our community and consumers elsewhere.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Our Principles
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700  px-9">
          <li>Integrity</li>
          <li>Gadaa</li>
          <li>Objectivity</li>
          <li>Responsibility</li>
          <li>Community engagement</li>
          <li>Nature-based solutions</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">Core Values</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 px-9">
          <li>
            Sustainability: Commitment to environmentally friendly farming and
            processing practices.
          </li>
          <li>
            Quality: Ensuring top-tier, nutritious products through rigorous
            quality control.
          </li>
          <li>
            Innovation: Continuously improving agricultural and processing
            technologies.
          </li>
          <li>
            Community: Supporting local communities and economies through our
            operations.
          </li>
          <li>
            Integrity: Upholding transparency and honesty in all business
            practices.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Major Activities of the Farm
        </h2>
        <Image src={Image1} alt="TS Farm Logo" />

        <p className="text-5xl font-bold mb-6 mt-6 w-[50rem] text-black flex space-y-10">
          RESPECTING and Improving the environment AND
        </p>
        <h3 className="text-2xl font-bold mb-6 text-black">
          Products and Services
        </h3>
        <ul className="list-disc list-inside space-y-4 text-gray-700 px-9">
          <li>Fruits: apples, avocado, strawberries, etc.</li>
          <li>
            Vegetables: garlic, potato, tomatoes, carrots, lettuce, cabbage,
            etc.
          </li>
          <li>
            Saffron: Premium-grade saffron (a spice) cultivation and processing.
          </li>
          <li>
            Processed Products: e.g., fruit jams, vegetable pickles, saffron
            threads, etc.
          </li>
          <li>
            Agritourism: Farm tours, U-pick activities, and educational
            workshops.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4 p-9 w-[80rem]">
          <Image src={Image2} alt="TS Farm Logo" width={800} height={350} />
          <Image src={Image3} alt="TS Farm Logo" width={800} height={350} />
          <Image src={Image4} alt="TS Farm Logo" width={800} height={350} />
          <Image src={Image5} alt="TS Farm Logo" width={800} height={350} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Sustainability Practices
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 px-9">
          <li>
            Organic Farming: Utilizing organic farming methods to promote soil
            health and biodiversity.
          </li>

          <li>
            Water Conservation: Implementing efficient irrigation systems and
            water-saving techniques.
          </li>
          <Image src={Image6} alt="TS Farm Logo" width={800} height={350} />

          <li>
            Renewable Energy: Using solar and other energy to power farm and
            processing operations.
          </li>
          <Image src={Image7} alt="TS Farm Logo" width={800} height={350} />

          <li>
            Waste Management: Recycling and composting agricultural waste to
            improve soil fertility.
          </li>
        </ul>
        <p className="mb-6 mt-6 text-lg text-gray-700">
          At TS Farm we use recycled farm waste for the following purposes and
          fully manage our wastes.
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-700 px-9">
          <li>
            Compost and organic fertilizer (from fruit pericarps, food scraps,
            and livestock manure).
          </li>
          <li>Mulching (from shredded residues, weeds, or wood chips).</li>
          <li>Livestock bedding (from crop residues or wood shavings).</li>
          <li>
            Renewable energy production — biogas and biochar (livestock manure
            and residues).
          </li>
          <li>
            Animal feed (from food processing by-products or excess plant
            residue production).
          </li>
          <li>Erosion control (with straw or plant residues).</li>
          <li>
            Construction materials (from agricultural plastics or wood waste).
          </li>
          <Image src={Image8} alt="TS Farm Logo" width={800} height={350} />
          <Image
            src={Image9}
            alt="TS Farm Logo"
            width={800}
            height={350}
            objectFit="cover"
          />
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Processing Facilities
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 px-9">
          <li>
            State-of-the-Art Equipment: Modern processing equipment to ensure
            high quality and safety standards.
          </li>
          <Image src={Image10} alt="TS Farm Logo" width={600} height={350} />

          <li>
            Quality Control: Rigorous testing and monitoring processes to
            maintain product integrity.
          </li>
          <Image src={Image11} alt="TS Farm Logo" width={600} height={350} />

          <li>
            Packaging: Eco-friendly packaging solutions to reduce environmental
            impact.
          </li>
          <div className="flex p-24 items-center  ">
            <Image src={Image12} alt="TS Farm Logo" width={350} />
            <Image
              src={Image13}
              alt="TS Farm Logo"
              className="h-52 w-96"
              objectFit="cover"
            />
          </div>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Community Involvement
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 px-9">
          <li>
            Local Partnerships: Collaborating with local businesses and
            organizations to support the community.
          </li>
          <li>
            Educational Programs: Offering farm visits and workshops for schools
            and community groups to promote agricultural education.
          </li>
          <li>
            Charity Work: Donating produce and processed goods to local food
            banks and participating in community service.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Organogram of the Farm
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          The success of any productive farm in part depends on the efficiency
          and effectiveness of the organizational structure developed to guide,
          plan, and manage the human, material, and financial resources deployed
          to achieve the objectives of the farm. Accordingly, the farm has also
          designed an organizational structure taking into account the size of
          the farm and labor force, volume of production, and financial
          transactions that the undertaking entails. The organizational
          structure and its manpower requirements will be fully operational when
          the farm reaches its optimum size. At the top of the organizational
          structure, there is a top management (company owner) to whom the
          general manager is accountable and the next general manager with the
          responsibility of supervising the overall activities of the farm.
          There is an auxiliary division under the general manager. Employees
          under each division are supervised by the division head who is
          accountable to the general manager. The organizational structure of
          the farm is shown in the figure below.
        </p>
        <div className="flex justify-center">
          <Image src={Image14} alt="TS Farm Logo" />
        </div>
      </section>
    </div>
  );
}
