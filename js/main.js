'use strict';
{
    /*
    **  loading
    */
    const loading = document.querySelector('.loading');
    const body = document.querySelector('body');
    window.addEventListener('load', () => {
        setTimeout(() => {document.body.style.display = 'block';}, 400)
        setTimeout(() => {loading.classList.add('hide');}, 800)
    });

    /*
    **  top-kv のタッチデバイス時の文字の切り替え
    */
    const touchDevice = !!('ontouchstart' in window); // iOS & Android
    const topText = document.querySelector('.top-kv-message');
    if(touchDevice) {
        topText.textContent = 'touch us!!';
    }

    /*
    **  top-kv > animation
    */
    const flowers = Array.from(document.querySelectorAll('.flower'));

    function animation(flower) {
        if(flower.classList.contains('active')){
            return;
        }
        flower.classList.add('active');
        setTimeout(() => {
            flower.classList.remove('active')
        }, 1500);
    }

    flowers.forEach( flower => {
        if(touchDevice) {
            flower.addEventListener('touchstart', () => {
                animation(flower);
            });
        } else {
            flower.addEventListener('mouseover', () => {
                animation(flower);
            });
        }
    })

    /*
    **  top-work > modal-window
    */
    const modal = Array.from(document.querySelectorAll('.top-work-item-modal'));
    const mask = Array.from(document.querySelectorAll('.top-work-item-modal-mask'));
    const close = Array.from(document.querySelectorAll('.top-work-item-modal-close'));
    const open = Array.from(document.querySelectorAll('.c-button--modal'));
    const html = document.querySelector('html');

    for( let i = 0; i < modal.length; i++ ) {
        open[i].addEventListener('click', () => {
            modal[i].classList.add('show');
            mask[i].classList.add('show');
            body.classList.add('show');
            html.classList.add('show');
        });

        close[i].addEventListener('click', () => {
            modal[i].classList.remove('show');
            mask[i].classList.remove('show');
            body.classList.remove('show');
            html.classList.remove('show');
        });

        mask[i].addEventListener('click', () => {
            close[i].click();
        });
    }

}

