

let scene, camera, renderer;
let geometry, material, mesh;

window.color1 = new THREE.Color(0.349, 0.820, 0.008);
window.color2 = new THREE.Color(0.953, 0.961, 0.125);

init();
animate();

function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Light setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1).normalize();
    scene.add(directionalLight);

    // Sphere geometry
    geometry = new THREE.SphereGeometry(2, 64, 32); // radius, segmentsWidth, segmentsHeight

    // Custom shader material
    const vertexShader = `
        varying vec3 vPosition;
        void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        varying vec3 vPosition;
        void main() {
            
            vec3 color1 = vec3(${window.color1.r}, ${window.color1.g}, ${window.color1.b}); // Purple
            vec3 color2 =vec3(${window.color2.r}, ${window.color2.g}, ${window.color2.b}); // Blue
            float stripeFrequency = 1.0; // Adjust the frequency of the stripes
            float stripe = sin(vPosition.x * stripeFrequency) * 0.5 + 0.5; // Calculate stripe pattern
            vec3 color = mix(color1, color2, stripe); // Mix colors based on stripe value
            gl_FragColor = vec4(color, 1.0); // Output final color with full opacity
        }
        

    `;

    material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {},
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth , window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    let speed = 1;
    requestAnimationFrame(animate);

    // Animation logic (rotate the sphere)
    if (mesh) {
        mesh.rotation.x += 0.01 * speed;
        mesh.rotation.y += 0.02 * speed;
    }

    // Render scene
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

