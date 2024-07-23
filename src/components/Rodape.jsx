import "./Rodape.css";

export default function Rodape() {
    return (
        <footer>
            <div id="footer_content">
                <div id="footer_contacts">
                    <div class="logo-footer">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.97257 0.0492897C3.75011 0.254902 2.64439 0.830612 1.75158 1.7216C1.09227 2.38641 0.810695 2.79763 0.446703 3.65434C-0.0271746 4.74408 0.000296534 4.045 0.000296534 16.4502C0.000296534 28.5881 -0.013439 28.1084 0.378025 29.1364C0.645868 29.8561 1.05794 30.5003 1.6417 31.1103C2.4727 31.9807 3.36551 32.5016 4.54677 32.8169L5.1168 32.9676L16.0709 32.9951C23.8658 33.0088 27.2242 32.9951 27.7049 32.9402C29.1334 32.7757 30.2872 32.2343 31.2762 31.2542C32.011 30.5277 32.4437 29.8218 32.8008 28.7595L33 28.1769V16.5256V4.8743L32.842 4.33286C32.2651 2.33843 30.768 0.837467 28.742 0.200073L28.1239 0.00817108L16.7234 0.00131607C10.4531 -0.00553894 5.16487 0.0150223 4.97257 0.0492897ZM12.2868 12.4065C14.6012 14.6271 16.4761 16.4708 16.4692 16.4982C16.4555 16.5256 14.5531 18.3692 12.2387 20.5967L8.02187 24.6472L6.92989 23.5986C6.33239 23.0298 5.83791 22.5226 5.84478 22.4883C5.84478 22.4472 7.23894 21.0902 8.93528 19.4727C10.6248 17.8484 12.0121 16.505 12.0189 16.4845C12.0189 16.4571 10.6316 15.1 8.92842 13.4688C7.23207 11.8377 5.83791 10.4875 5.83791 10.4669C5.83791 10.3778 7.93946 8.33542 8.00813 8.34913C8.05621 8.36283 9.97919 10.1859 12.2868 12.4065ZM27.2654 23.3793V24.6472H23.2821H19.2988V23.3793V22.1114H23.2821H27.2654V23.3793Z" fill="white" />
                        </svg>
                        <h1>Digital Store</h1>
                    </div>
                    <div className="paragrafo-footer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>

                    <div id="footer_social_media">
                        <svg width="125" height="21" viewBox="0 0 125 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M124.028 3.18075C123.313 3.48789 122.561 3.70229 121.791 3.81875C122.152 3.75775 122.68 3.10675 122.891 2.84375C123.222 2.44366 123.475 1.98414 123.634 1.48975C123.653 1.45075 123.667 1.40275 123.628 1.37275C123.609 1.36453 123.588 1.36114 123.568 1.36289C123.547 1.36463 123.527 1.37146 123.51 1.38275C122.672 1.83006 121.781 2.17103 120.858 2.39775C120.826 2.40776 120.792 2.40847 120.759 2.39979C120.727 2.39112 120.698 2.37342 120.675 2.34875C120.604 2.26407 120.526 2.18484 120.443 2.11175C120.059 1.78228 119.625 1.51686 119.157 1.32575C118.533 1.07202 117.859 0.963287 117.187 1.00775C116.534 1.05173 115.897 1.2312 115.317 1.53475C114.736 1.83885 114.223 2.25802 113.809 2.76675C113.381 3.29368 113.074 3.90813 112.909 4.56675C112.77 5.191 112.754 5.83639 112.862 6.46675C112.876 6.57375 112.868 6.58775 112.77 6.57375C109.26 6.21589 106.011 4.56129 103.657 1.93375C103.55 1.81275 103.493 1.81275 103.406 1.94375C102.933 2.8177 102.754 3.82101 102.895 4.80477C103.037 5.78852 103.493 6.70029 104.194 7.40475C104.372 7.57375 104.556 7.74275 104.753 7.89675C104.141 7.85081 103.543 7.68357 102.996 7.40475C102.889 7.33675 102.835 7.37575 102.827 7.49675C102.819 7.67125 102.829 7.84607 102.855 8.01875C102.961 8.84114 103.284 9.62058 103.79 10.2771C104.296 10.9336 104.968 11.4436 105.737 11.7548C105.924 11.8367 106.12 11.8967 106.321 11.9338C105.753 12.0473 105.171 12.0652 104.597 11.9867C104.471 11.9627 104.422 12.0257 104.471 12.1467C104.766 12.9194 105.254 13.6037 105.887 14.1347C106.521 14.6658 107.281 15.0259 108.093 15.1807C108.257 15.2098 108.42 15.2098 108.585 15.2488C108.575 15.2628 108.566 15.2627 108.556 15.2778C107.852 15.9126 107.002 16.3631 106.082 16.5888C104.878 17.0184 103.596 17.1825 102.323 17.0697C102.123 17.0408 102.079 17.0417 102.023 17.0697C101.967 17.0977 102.016 17.1528 102.081 17.2048C102.338 17.3738 102.598 17.5238 102.863 17.6698C103.662 18.0946 104.505 18.4319 105.376 18.6758C107.618 19.35 109.998 19.4242 112.277 18.891C114.557 18.3577 116.657 17.2356 118.367 15.6368C121.03 12.9918 121.967 9.34375 121.967 5.69175C121.967 5.54875 122.136 5.46975 122.237 5.39175C122.912 4.86759 123.507 4.24812 124.004 3.55275C124.082 3.45225 124.124 3.32809 124.122 3.20075V3.18075C124.119 3.12475 124.118 3.14275 124.028 3.18075Z" fill="white" />
                            <path d="M61.3772 3.59082C61.0646 3.59082 60.7647 3.71504 60.5436 3.93614C60.3225 4.15725 60.1982 4.45713 60.1982 4.76982C60.1981 4.92473 60.2285 5.07815 60.2877 5.22131C60.3469 5.36447 60.4337 5.49456 60.5432 5.60415C60.6527 5.71373 60.7827 5.80066 60.9258 5.85998C61.0689 5.91929 61.2223 5.94982 61.3772 5.94982C61.6899 5.94982 61.9898 5.82561 62.2109 5.6045C62.432 5.38339 62.5562 5.08351 62.5562 4.77082C62.5564 4.61591 62.526 4.46249 62.4668 4.31933C62.4076 4.17617 62.3208 4.04608 62.2113 3.93649C62.1018 3.82691 61.9718 3.73997 61.8287 3.68066C61.6856 3.62135 61.5322 3.59082 61.3772 3.59082Z" fill="white" />
                            <path d="M56.1361 5.10303C54.8233 5.10435 53.5647 5.62637 52.6363 6.55454C51.7079 7.48272 51.1857 8.74126 51.1841 10.054C51.1857 11.3669 51.7079 12.6255 52.6362 13.5539C53.5646 14.4822 54.8232 15.0044 56.1361 15.006C57.449 15.0044 58.7076 14.4822 59.6359 13.5539C60.5643 12.6255 61.0865 11.3669 61.0881 10.054C61.0865 8.74126 60.5642 7.48272 59.6359 6.55454C58.7075 5.62637 57.4489 5.10435 56.1361 5.10303ZM56.1361 13.226C55.2949 13.2252 54.4884 12.8906 53.8937 12.2957C53.2989 11.7008 52.9646 10.8942 52.9641 10.053C52.9649 9.21201 53.2993 8.40566 53.894 7.81096C54.4887 7.21627 55.2951 6.88182 56.1361 6.88103C56.9771 6.88182 57.7835 7.21627 58.3782 7.81096C58.9728 8.40566 59.3073 9.21201 59.3081 10.053C59.3076 10.8942 58.9732 11.7008 58.3785 12.2957C57.7838 12.8906 56.9773 13.2252 56.1361 13.226Z" fill="white" />
                            <path d="M60.0681 20.108H52.0361C50.435 20.1061 48.9 19.4693 47.7679 18.3371C46.6358 17.205 45.9989 15.67 45.9971 14.069V6.04098C45.9987 4.43973 46.6354 2.90451 47.7675 1.77216C48.8997 0.639813 50.4348 0.00282968 52.0361 0.000976562H60.0641C61.6651 0.0028292 63.2001 0.639674 64.3322 1.7718C65.4644 2.90394 66.1012 4.4389 66.1031 6.03998V14.068C66.1015 15.6685 65.4653 17.2031 64.334 18.3354C63.2027 19.4676 61.6686 20.1051 60.0681 20.108ZM52.0361 1.89297C50.9366 1.8943 49.8826 2.33164 49.1052 3.10907C48.3277 3.88649 47.8904 4.94053 47.8891 6.03998V14.068C47.8888 15.1685 48.3254 16.224 49.103 17.0028C49.8806 17.7815 50.9356 18.2197 52.0361 18.221H60.0641C61.1638 18.2199 62.2182 17.7827 62.996 17.0053C63.7738 16.2279 64.2115 15.1737 64.2131 14.074V6.04597C64.2115 4.94626 63.7738 3.89208 62.996 3.11465C62.2182 2.33722 61.1638 1.90003 60.0641 1.89898L52.0361 1.89297Z" fill="white" />
                            <path d="M10.2 11.464L10.765 7.776H7.227V5.382C7.20225 5.10655 7.23978 4.82905 7.33681 4.57006C7.43384 4.31108 7.58788 4.07724 7.78752 3.88585C7.98717 3.69446 8.2273 3.55043 8.49015 3.46443C8.75301 3.37842 9.03184 3.35265 9.306 3.389H10.915V0.248997C9.97033 0.0965865 9.01579 0.0133685 8.059 0C5.144 0 3.24 1.766 3.24 4.963V7.775H0V11.463H3.239V20.379C3.89863 20.4824 4.56531 20.5342 5.233 20.534C5.90068 20.5342 6.56737 20.4824 7.227 20.379V11.463L10.2 11.464Z" fill="white" />
                        </svg>
                    </div>
                </div>

                <ul class="footer-list">
                    <li>
                        <h3>Informações</h3>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Sobre Drip Store</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Segurança</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Wishlist</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Blog</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Trabalhe conosco</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Meus pedidos</a>
                    </li>
                </ul>

                <ul class="footer-list">
                    <li>
                        <h3>Categoria</h3>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Camisetas</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Calças</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Bonés</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Headphones</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Tenis</a>
                    </li>
                </ul>

                <div id="footer_subscribe">
                    <h3>Contatos</h3>

                    <p className="paragrafo-footer">
                        Av. Santos Dumont,1510- 1°
                        andar - Aldeota, Fortaleza -
                        CE, 60150-161

                       <p>(85)3051- 3411</p>
                    </p>
                </div>
            </div>

            <div id="footer_copyright">
                @ 2024 Digital Store
            </div>
        </footer>

    );

}