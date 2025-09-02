import React from 'react';
import IndustriesHero from '../../components/Industries/IndustriesHero/IndustriesHero';
import IndustryCard from '../../components/Industries/IndustryCard/IndustryCard';
import AutomationSection from '../../components/Industries/AutomationSection/AutomationSection';

const Industries = () => {
    return (
        <div>
            {/* Hero Section */}
            <IndustriesHero />

            {/* Manufacturing Section */}
            <IndustryCard 
                title="Manufacturing"
                description="Manufacturing is the backbone of global economies, and automation is revolutionizing how products are made. From precision machining to assembly line optimization, OSDEMS CNC provides solutions that improve accuracy, speed, and consistency in production processes."
                importance="In a market where efficiency and quality are paramount, automation reduces human error, minimizes waste, and ensures faster time-to-market. Companies that adopt automation gain a competitive edge by meeting demand more effectively and scaling operations seamlessly."
                image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center"
                alt="Manufacturing Industry"
                theme="light"
            />

            {/* Automotive Section */}
            <IndustryCard 
                title="Automotive"
                description="The automotive industry demands unparalleled precision and reliability. Our CNC solutions support the production of engine components, transmission parts, and intricate assemblies that meet the highest safety and performance standards."
                importance="As vehicles become more complex and electric cars gain traction, precision manufacturing is crucial for ensuring safety, performance, and innovation. Automation also enables cost-effective production of both traditional and next-generation automotive technologies."
                image="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop&crop=center"
                alt="Automotive Industry"
                theme="dark"
                reverse={true}
            />

            {/* Aerospace Section */}
            <IndustryCard 
                title="Aerospace"
                description="Aerospace engineering requires components that withstand extreme conditions while maintaining exact specifications. OSDEMS CNC delivers the precision and reliability needed for critical aerospace applications, from turbine blades to structural components."
                importance="The aerospace industry cannot afford failures, making precision manufacturing essential for safety and performance. Every component must meet stringent standards, and automation ensures consistent quality while reducing production time and costs."
                image="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&h=600&fit=crop&crop=center"
                alt="Aerospace Industry"
                theme="light"
            />

            {/* Medical Section */}
            <IndustryCard 
                title="Medical Devices"
                description="Medical device manufacturing requires exceptional precision and adherence to strict regulatory standards. Our solutions enable the production of surgical instruments, implants, and diagnostic equipment that save lives and improve healthcare outcomes."
                importance="In healthcare, precision can be a matter of life and death. Medical devices must meet exacting standards for biocompatibility, sterility, and functionality. Automation ensures consistent quality while enabling the production of complex, life-saving devices."
                image="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop&crop=center"
                alt="Medical Devices Industry"
                theme="dark"
                reverse={true}
            />

            {/* Oil and Gas Section */}
            <IndustryCard 
                title="Oil and Gas"
                description="The oil and gas industry operates in some of the world's most challenging environments. Our CNC solutions produce durable components for drilling equipment, pipelines, and refinement processes that withstand extreme pressures and corrosive conditions."
                importance="Energy infrastructure requires components that operate reliably under extreme conditions. Precision manufacturing ensures safety, reduces downtime, and maximizes operational efficiency in critical energy production and distribution systems."
                image="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center"
                alt="Oil and Gas Industry"
                theme="light"
            />

            {/* Electronics Section */}
            <IndustryCard 
                title="Electronics"
                description="The electronics industry drives technological innovation across all sectors. Our precision manufacturing solutions enable the production of components for smartphones, computers, IoT devices, and emerging technologies that shape our digital future."
                importance="As electronic devices become smaller, more powerful, and more complex, precision manufacturing becomes increasingly critical. Automation enables the production of miniaturized components with tolerances measured in microns, essential for modern technology."
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=center"
                alt="Electronics Industry"
                theme="dark"
                reverse={true}
            />

            {/* Automation Section */}
            <AutomationSection />
        </div>
    );
};

export default Industries;
