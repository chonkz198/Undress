 function animateButtonClick() {
  const button = document.querySelector('.link-button');
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 500);
}
document.querySelector('.link-button').addEventListener('click', function() {
  animateButtonClick();
});

document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabName = button.getAttribute('data-tab');

            // Hide all tab contents and deactivate all tab buttons
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the selected tab content and activate the clicked tab button
            const selectedTabContent = document.getElementById(tabName);
            if (selectedTabContent) {
                selectedTabContent.classList.add('active');
                button.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const videoWrappers = document.querySelectorAll('.vid-wrapper');

  videoWrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseenter', function () {
      wrapper.querySelector('video').classList.add('video-controls');
    });

    wrapper.addEventListener('mouseleave', function () {
      wrapper.querySelector('video').classList.remove('video-controls');
    });
  });
});