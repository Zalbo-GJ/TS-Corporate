import ServiceCard from "@/components/ServiceCard";
import Container from "../../public/images/container.svg";
import Consultancy from "../../public/images/consultancy.svg";
import Farming from "../../public/images/farming.svg";

export default function ServicesSection() {
  return (
    <div className="flex flex-col items-center px-4 py-8" id="services">
      <h1 className="text-2xl text-blue-600 font-bold mb-8">Our Sectors</h1>
      <div className="flex flex-col space-y-9 ">
        <ServiceCard
          leftRadius={false}
          link="tscf"
          vector={Consultancy}
          imageWidth={80}
          title="TS Consulting Firm (TSCF)"
          description="TS Consulting Firm, established in 2017, specializes in providing a comprehensive range of consulting services, including Environmental Impact Assessments (EIA), Environmental Management Plans, Environmental Audits, and Greenhouse Gas Inventories. Certified by Ethiopia’s Environmental Protection Authority, the firm also offers project management-related services, certified by the Ethiopian Management Institute. With a strong focus on environmental planning, occupational health and safety, and quality management systems, TS Consulting delivers high-quality, cost-effective solutions that meet both national and international standards. The firm serves clients across diverse sectors, supporting sustainable development and informed decision-making."
        />
        <ServiceCard
          leftRadius={true}
          link="tsie"
          vector={Container}
          imageWidth={72}
          title="TS Import-Export (TSIE)"
          description="TSIE, established in 2017, is a leading international trade house known for its reliable import and export operations. Specializing in the large-scale trading of machinery, construction materials, and agricultural products such as coffee, spices, and oilseeds, TSIE partners with multinational organizations across the Middle East, Europe, Asia, Latin America, and Africa. The company also offers machinery rental, commissioning, and agency services. TSIE's success stems from its commitment to quality, timely shipments, and strong business relationships, ensuring high client satisfaction through expert operations and precise logistics."
        />
        <ServiceCard
          leftRadius={false}
          link="tsfarm"
          vector={Farming}
          title="TS Farm (TSF)"
          imageWidth={65}
          description="TS Farm (TSF) and Processing Company, founded in 2024 in the Ambo District of Oromia, is a premier agricultural enterprise specializing in the sustainable cultivation and processing of fruits, vegetables, and saffron. With a focus on both domestic and export markets, TSF employs innovative farming techniques like drip irrigation to maximize output and add value to locally available raw materials. Our mission is to provide fresh, nutritious, and high-quality products while fostering environmental sustainability and enhancing the local economy through job creation and agri-tourism."
        />
      </div>
    </div>
  );
}
