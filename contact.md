---
layout: page
title: Contact
eyebrow: Get in touch
permalink: /contact/
---

Speaking, consulting, ministry, or a good conversation about
leadership — I'd like to hear from you.

## Book a one-on-one

<!-- TODO: rewrite these two descriptions in your own voice -->
<div class="grid">
  <div class="card">
    <span class="tag">Ministry</span>
    <h3>Spiritual session</h3>
    <p>Prayer, discipleship, or thinking out loud through something
    you're carrying — a conversation for the person, not the role.</p>
    <a class="btn primary"
       href="https://calendly.com/emmanuelpsalm/vision-and-strategic-call?utm_source=website&amp;utm_medium=contact_page&amp;utm_campaign=spiritual_session"
       data-calendly="https://calendly.com/emmanuelpsalm/vision-and-strategic-call?utm_source=website&amp;utm_medium=contact_page&amp;utm_campaign=spiritual_session">Book a spiritual session</a>
  </div>
  <div class="card">
    <span class="tag">Consulting</span>
    <h3>Business consultation</h3>
    <p>Team leadership, hiring, difficult escalations, or building a
    culture that holds when it costs something.</p>
    <a class="btn primary"
       href="https://calendly.com/emmanuelpsalm/vision-and-strategic-call?utm_source=website&amp;utm_medium=contact_page&amp;utm_campaign=business_consultation"
       data-calendly="https://calendly.com/emmanuelpsalm/vision-and-strategic-call?utm_source=website&amp;utm_medium=contact_page&amp;utm_campaign=business_consultation">Book a consultation</a>
  </div>
</div>

## Or reach out directly

<div class="contact-block">
  <div class="contact-row">
    <span class="eyebrow">Email</span>
    <a href="mailto:{{ site.email }}">{{ site.email }}</a>
  </div>
  {% if site.linkedin %}
  <div class="contact-row">
    <span class="eyebrow">LinkedIn</span>
    <a href="{{ site.linkedin }}">{{ site.linkedin }}</a>
  </div>
  {% endif %}
  {% if site.youtube %}
  <div class="contact-row">
    <span class="eyebrow">YouTube</span>
    <a href="{{ site.youtube }}">{{ site.youtube }}</a>
  </div>
  {% endif %}
  {% if site.instagram %}
  <div class="contact-row">
    <span class="eyebrow">Instagram</span>
    <a href="{{ site.instagram }}">{{ site.instagram }}</a>
  </div>
  {% endif %}
  {% if site.facebook %}
  <div class="contact-row">
    <span class="eyebrow">Facebook</span>
    <a href="{{ site.facebook }}">{{ site.facebook }}</a>
  </div>
  {% endif %}
</div>
