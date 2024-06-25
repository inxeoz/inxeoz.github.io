// particle.js

let particles;

initParticles();
animateParticles();

function initParticles() {
    // Particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 10;
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
}

function animateParticles() {
    let speed = 10;
    requestAnimationFrame(animateParticles);

    // Animation logic (rotate the particles)
    if (particles) {
        particles.rotation.x += 0.001 * speed;
        particles.rotation.y += 0.002 * speed;
    }
}

