<script setup lang="ts">
const { t, locale } = usePortfolioSettings()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const isSending = ref(false)
const feedback = ref<{ type: 'success' | 'error'; text: string } | null>(null)

const handleSubmit = async () => {
  feedback.value = null

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    feedback.value = {
      type: 'error',
      text:
        locale.value === 'id'
          ? 'Mohon lengkapi nama, email, dan pesan Anda.'
          : 'Please fill in your name, email, and message.',
    }
    return
  }

  isSending.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    })

    feedback.value = {
      type: 'success',
      text:
        locale.value === 'id'
          ? 'Pesan berhasil terkirim ke Gmail! Terima kasih telah menghubungi saya.'
          : 'Message sent directly to Gmail! Thank you for reaching out.',
    }
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err: any) {
    feedback.value = {
      type: 'error',
      text:
        err?.data?.statusMessage ||
        (locale.value === 'id'
          ? 'Gagal mengirim pesan. Silakan coba lagi atau kirim email langsung.'
          : 'Failed to send message. Please try again or email directly.'),
    }
  } finally {
    isSending.value = false
  }
}

const contactIcons = [
  {
    id: 'email',
    label: 'Email — gunawandzakwans@gmail.com',
    href: 'mailto:gunawandzakwans@gmail.com',
    external: false,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp — +62 882-2360-9370',
    href: 'https://wa.me/6288223609370',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/GunawanDS',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gunawan-dzakwan-s/',
    external: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/gunawandzakwans/',
    external: true,
  },
]
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <div v-reveal class="contact-content">
        <p class="section-eyebrow">{{ t.contact.eyebrow }}</p>

        <h2>{{ t.contact.heading }}</h2>

        <p class="contact-description">{{ t.contact.description }}</p>

        <!-- Minimalist Monochrome Social & Contact Icons -->
        <div class="contact-icon-row">
          <a
            v-for="item in contactIcons"
            :key="item.id"
            :href="item.href"
            class="contact-icon-link"
            :aria-label="item.label"
            :title="item.label"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
          >
            <!-- Solid Email -->
            <svg v-if="item.id === 'email'" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
            </svg>
            <!-- Solid WhatsApp -->
            <svg v-else-if="item.id === 'whatsapp'" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M12.03 2a9.94 9.94 0 0 0-8.6 14.92L2 22l5.22-1.37A9.95 9.95 0 1 0 12.03 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.22 8.22 0 1 1 6.95 3.85Zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.53.06a6.72 6.72 0 0 1-1.98-1.22 7.45 7.45 0 0 1-1.37-1.71c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.65 4.2 3.71.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.1-.22-.16-.47-.29Z" />
            </svg>
            <!-- Solid GitHub -->
            <svg v-else-if="item.id === 'github'" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
            <!-- Solid LinkedIn -->
            <svg v-else-if="item.id === 'linkedin'" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75ZM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H5.5v8.37h2.77Z" />
            </svg>
            <!-- Solid Instagram -->
            <svg v-else-if="item.id === 'instagram'" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25ZM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
            </svg>
          </a>
        </div>
      </div>

      <form v-reveal class="contact-form" @submit.prevent="handleSubmit">
        <div class="contact-form-group">
          <label for="contact-name">{{ t.contact.name }}</label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            :placeholder="t.contact.name"
            required
          />
        </div>

        <div class="contact-form-group">
          <label for="contact-email">{{ t.contact.email }}</label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            :placeholder="t.contact.email"
            required
          />
        </div>

        <div class="contact-form-group">
          <label for="contact-message">{{ t.contact.message }}</label>
          <textarea
            id="contact-message"
            v-model="form.message"
            rows="5"
            :placeholder="t.contact.message"
            required
          />
        </div>

        <p
          v-if="feedback"
          class="contact-feedback"
          :class="feedback.type === 'success' ? 'is-success' : 'is-error'"
          role="status"
        >
          {{ feedback.text }}
        </p>

        <button
          type="submit"
          class="contact-cta contact-form-submit"
          :disabled="isSending"
        >
          <span v-if="isSending">{{ locale === 'id' ? 'Mengirim...' : 'Sending...' }}</span>
          <span v-else>{{ t.contact.send }}</span>
          <span aria-hidden="true">↗</span>
        </button>
      </form>
    </div>
  </section>
</template>
