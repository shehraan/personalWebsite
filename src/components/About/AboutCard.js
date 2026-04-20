import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi, I am <span className="purple">Shehraan </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            <br /> */}
            <div className="about-content">
              <section className="about-section-block">
                <h3>My Focus</h3>
                <p>
                  I’ve been working across both software and hardware, with a focus on real-time systems that interact directly with the physical world. My recent projects include a DIY VR headset and controller, where I’ve explored low-latency tracking, sensor fusion, and full-stack interaction pipelines from embedded hardware to the application layer..
                </p>
              </section>

              <br />

              <section className="about-section-block">
                <h3>Why this work interests me</h3>
                <p>
                  In parallel to my VR projects, I’ve built AI-driven communication and workflow systems around voice agents and operational tooling. What connects these projects is a broader interest in interfaces that feel more natural and less rigid. I’m especially interested in systems that can operate directly within real-world contexts, whether through voice, XR, or other forms of low-friction interaction.
                </p>
              </section>

              <br />

              <section className="about-section-block">
                <h3>Where I've been</h3>
                <p>
                    <b>2025:</b> CareCycle (YC W25) - Founding Engineer
                  <ul>
                    <li>Worked on voice AI workflows for Medicare teams and shipped tooling that made onboarding and campaign setup much faster.</li>
                    </ul>   
                   <b>2024:</b> Social Ventures Zone - Growth
                  <ul>
                    <li>Helped early-stage startups with outreach, PMF research, and go-to-market work to sharpen who they should sell to.</li>
                  </ul>
                   <b>2023:</b> SecondWave - CEO & Co-founder
                  <ul>
                    <li>Built a GPU optimization prototype. Got initial funding and traction traction, and learned firsthand how much speed and market timing matter. 
                    My full reflection: <a href="https://docs.google.com/document/d/1zAxeCweo6_dUjqhX7ExKdcl17XjmbUaDpszyokqMM74/edit?usp=sharing">Learnings from Building SecondWave</a></li>
                  </ul>
                </p> 

              </section>

              <br />

              <section className="about-section-block">
                <h3>Where I'm going</h3>
                <p>
                  I’m currently looking for long-term roles where I can work on products with strong technical teams and keep growing through hard, hands-on engineering work. I’m especially interested in applied AI, communication workflows, and embedded systems. I’m most motivated by environments where I can move quickly, build end-to-end, and contribute to systems that have real-world impact.
                </p>
              </section>
            </div>
          </p>
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
