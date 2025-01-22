const yardyStoriesModal = document.querySelector('#stories_modal');
  const openModal = document.querySelector('.read_more_btn');
  const closeModal = document.querySelector('.close_btn_yardy');

  openModal.addEventListener('click', () => {
    yardyStoriesModal.showModal();
  })

  closeModal.addEventListener('click', () => {
    yardyStoriesModal.close();
  })

  