"use client";
import React from "react";

function ContactsInfo() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b5c22871-0195-4c23-adab-89f48dd42a3b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
  <div>
    <form onSubmit={onSubmit}>
      <div className="section contacts section_" id="section-contacts">
        <div className="content">
          <div className="title">
            <div className="title_inner">Contact</div>
          </div>
          
          <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-social-linkedin" />
            </div>
            <div className="name">Linkedin</div>
            <p><a href="https://www.linkedin.com/in/logan-bovet/">@logan-bovet</a></p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Email</div>
            <p>
              <a href="mailto:logan.bovet@outlook.com">
                logan.bovet@outlook.com
              </a>
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-location" />
            </div>
            <div className="name">Déplacements</div>
            <p>90km autour de Luxey (40430).</p>
          </div>
        </div>
          <div className="contact_form">
            <div>
              <input type="text" name="name" placeholder="Votre Nom" />
            </div>
            <div>
              <input type="email" name="email" required placeholder="email@example.com" />
            </div>
            <div>
               <textarea name="message" required placeholder="Message"></textarea>
             </div>
            <button type="submit" className="btn fill" >Envoyer Message</button>
          </div>
        </div>
      </div>
    </form>
      <span>{result}</span>
  </div>
  );
}

export default ContactsInfo;