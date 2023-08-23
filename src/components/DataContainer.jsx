import React from 'react'
import DataFields from './DataFields'
import { automate1, automate2, automate3, bigLogo, build1, build2, build3, connect1, connect2, connect3, implementIcon1, implementIcon2, implementIcon3, support1, support2, support3 } from '../assets'

const DataContainer = () => {
    return (
        <section className='bg-transparent'>
            <DataFields
                h1={"Transform your business"} h2={"With Chirpn IT Solutions"} p1={"At Chirpn IT Solutions we use technology to solve your real business challenges and boost your performance. Our global team of provide enterprise-level technology, service and support without the hefty price tag. Whether you need to build a new application from scratch, implement a new technology platform or simply connect your existing systems, Chirpn can remove the complexity from next IT project."} p2={"We work with commercial and IT teams across all industries to deliver simple technologysolutions that transform your business."} data={"TALK TO CHIRPN"} bgcolor={"#13abf4"} image={bigLogo} order={"right"}
            />

{/* content one */}
            <DataFields
                h2={"Build"} p1={"Your technology requirements are just as unique as your business. Our Accelerated Development Framework allows us to rapidly build customised technology solutions that best fit your requirements at a lower total cost. Chirpn consultants develop new tools and systems from scratch or customise components within an existing platform to solve prevalent business problems and achieve a faster time to market."} data={"Read more"} bgcolor={"#f98364"} image1={build1} image2={build2} image3={build3} order={"left"}
            />

            {/* content 2 */}
            <DataFields
                h2={"Implement"} p1={"Chirpn specialises in solution implementation for small and large businesses. Whether you’re looking to onboard a new CRM system like Salesforce or upgrade to an enterprise Microsoft application, we ensure that any new technology solutions are seamlessly integrated with your existing business systems. Our team of IT experts offer full platform training for end users and provide continuous technical assistance and consulting to power your business growth."} data={"Read more"} bgcolor={"#ef832b"} image1={implementIcon1} image2={implementIcon2} image3={implementIcon3} order={"right"}
            />

            {/* content 3 */}
            <DataFields
                h2={"Connect"} p1={"Today, the average business has multiple technology systems and vendors to support, from sales and marketing automation tools to finance and invoicing systems. Every platform collects and processes valuable business data but often none of them communicate with each other. Chirpn helps businesses connect these various platforms to minimise data loss and create a single source of truth for the organisation."} data={"Read more"} bgcolor={"#01ad9f"} image1={connect1} image2={connect2} image3={connect3} order={"left"}
            />

            {/* content 4 */}
            <DataFields
                h2={"Automate"} p1={"Many organisations struggle with slow, inefficient manual processes or repetitive tasks prone to human error, that can have a significant impact on business performance. Chirpn are leaders in Digital Process Automation, which leverages technology to automate these manual processes. Our range of Ezytool solutions free up your staff’s time to do more strategic work that drives performance."} data={"Read more"} bgcolor={"#13abf4"} image1={automate1} image2={automate2} image3={automate3} order={"right"}
            />

            {/* content 5 */}
            <DataFields
                h2={"Support"} p1={"To get the best results from any new IT or technology solution, you need the right support and training. At Chirpn we believe that delivering a product or service isn’t the last step in a project, but instead, the beginning of a long-term partnership. Our consultants provide full technical support and assistance around the clock for all customers. With offices in the United States, India and Australia, Chirpn experts are available 24/7 to service your technology needs."} data={"Read more"} bgcolor={"#4a49c9"} image1={support1} image2={support2} image3={support3} order={"left"}
            />
        </section>
    )
}

export default DataContainer