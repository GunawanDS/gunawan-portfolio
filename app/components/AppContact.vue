<script setup lang="ts">
const { t } = usePortfolioSettings()

const contactLinks = [
  {
    label: 'Email',
    value: 'gunawandzakwans@gmail.com',
    href: 'mailto:gunawandzakwans@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gunawan-dzakwan-s',
    href: 'https://www.linkedin.com/in/gunawan-dzakwan-s/',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/GunawanDS',
    href: 'https://github.com/GunawanDS',
    external: true,
  },
  {
    label: 'Instagram',
    value: 'instagram.com/gunawandzakwans',
    href: 'https://www.instagram.com/gunawandzakwans/',
    external: true,
  },
]
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <div class="contact-content">
        <p class="section-eyebrow">{{ t.contact.eyebrow }}</p>

        <h2>{{ t.contact.heading }}</h2>

        <p class="contact-description">{{ t.contact.description }}</p>

        <a
          class="contact-cta"
          href="mailto:gunawandzakwans@gmail.com"
        >
          {{ t.contact.cta }}
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="contact-links">
        <a
          v-for="item in contactLinks"
          :key="item.label"
          :href="item.href"
          v-reveal class="contact-link"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
        >
          <span class="contact-link-label">{{ item.label }}</span>
          <span class="contact-link-value">{{ item.value }}</span>
          <span class="contact-link-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>