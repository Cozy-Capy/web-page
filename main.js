import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="floating-bubbles" id="bubbles-container"></div>
  <div class="card">
    <img src="./capybara.jpg" alt="Cozy Capybara" class="capybara-img" />
    <h1>Cozy Capy</h1>
    <p class="subtitle">Your gentle guide through anxiety and panic. Discover grounded relief and a comforting space to regain your calm, coming soon.</p>
    
    <form class="notify-form" id="notify-form">
      <input type="email" class="email-input" placeholder="Enter your email" required />
      <button type="submit" class="notify-btn">Notify Me</button>
    </form>

    <div class="features">
      <div class="feature">
        <div class="feature-icon">🌿</div>
        <div class="feature-text">Relief</div>
      </div>
      <div class="feature">
        <div class="feature-icon">⚓</div>
        <div class="feature-text">Grounding</div>
      </div>
      <div class="feature">
        <div class="feature-icon">💖</div>
        <div class="feature-text">Support</div>
      </div>
    </div>
  </div>
`

// Generate floating bubbles
const container = document.getElementById('bubbles-container');
for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  // Randomize bubble properties
  const size = Math.random() * 60 + 20; // 20px to 80px
  const left = Math.random() * 100; // 0% to 100%
  const duration = Math.random() * 10 + 10; // 10s to 20s
  const delay = Math.random() * 10; // 0s to 10s
  
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${left}%`;
  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `${delay}s`;
  
  container.appendChild(bubble);
}

// Form submission handler
document.getElementById('notify-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const input = e.target.querySelector('input');
  
  if (input.value) {
    btn.textContent = 'Added! ✓';
    btn.style.background = '#4CAF50';
    input.value = '';
    
    setTimeout(() => {
      btn.textContent = 'Notify Me';
      btn.style.background = 'var(--primary-color)';
    }, 3000);
  }
});
