// "use client";
// import React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const faqData = [
//   {
//     title: "Bilgilerimi Yanlış Girdim",
//     content: `Lütfen yöneticilerimizle aşağıdaki linkten iletişime geçiniz.
//       <br />
//       <a href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>`,
//   },
//   {
//     title: "WhatsApp Grubuna Giremedim",
//     content: `Bilgilerinizle tekrar üye olmayı deneyiniz. Otomatik olarak sistem WhatsApp grubuna atacaktır.
//       Sorunun devam etmesi halinde yöneticilerle iletişime geçiniz.
//       <br />
//       <a href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>`,
//   },
//   {
//     title: "Genel Kurul Sertifikamı Alamadım",
//     content: `Bilgilerinizle tekrar üye olmayı deneyiniz. Karşınıza sertifika alma ekranı gelecektir.
//       Girdiğiniz zaman sertifikanız otomatik olarak indirilecektir.
//       Sorunun devamı halinde yöneticilerimizle aşağıdaki linkten iletişime geçiniz.
//       <br />
//       <a href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>`,
//   },
//   {
//     title: "Sertifikamı Linkedine Yükleyemedim",
//     content: `Belgeyi indirerek yüklemeyi deneyiniz.
//       Sorunun devam etmesi halinde yöneticilerle iletişime geçiniz.
//       <br />
//       <a href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>`,
//   },
//   {
//     title: "Okul Numaramı Bilmiyorum",
//     content: `Okul numarası İYTE Öğrenci kartınız üzerinde yazmaktadır. 9 Haneli öğrenci numaranızın bulunmaması halinde Öğrenci İşlerine başvurunuz.`,
//   },
//   {
//     title: "İYTE Öğrencisi Değilim Nasıl Üye Olabilirim?",
//     content: `Enstitü Dışı Kayıt Sistemimiz yapım aşamasındadır.
//       İnstagram hesabımızı takip ederek sistem aktifleştiği zaman siz de İYTE Yazılım Topluluğu Üyesi olabilirsiniz.`,
//   },
//   {
//     title: "Çift Ana Dal / Yan Dal Yapıyorum Bölüme Ne Yazacağım?",
//     content: `Lütfen merkezi yerleştirme ile girdiğiniz bölümü yazınız.`,
//   },
//   {
//     title: "Üniversite Öğrencisi Değilim, Üye Olabiliyor Muyum?",
//     content: `Enstitü Dışı Kayıt Sistemimiz yapım aşamasındadır.
//       İnstagram hesabımızı takip ederek sistem aktifleştiği zaman siz de İYTE Yazılım Topluluğu Üyesi olabilirsiniz.`,
//   },
// ];

// const Events = () => {
//   return (
//     <div className="bg-white py-4">
//       <div className="container max-w-4xl mx-auto flex flex-col items-center">
//         {/* Section Title */}
//         <h2 className="text-center my-12 text-4xl font-semibold">
//           Bir sorunla mı karşılaştınız?
//         </h2>

//         {/* FAQ Accordion */}
//         <div className="mt-5 mb-8 w-full">
//           {faqData.map((faq, index) => (
//             <Accordion key={index} sx={{ position: "relative", zIndex: 0 }}>
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls={`panel${index}-content`}
//                 id={`panel${index}-header`}
//               >
//                 <Typography>{faq.title}</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   dangerouslySetInnerHTML={{ __html: faq.content }}
//                 />
//               </AccordionDetails>
//             </Accordion>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;
