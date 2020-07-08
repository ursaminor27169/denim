<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style/overalls.css">
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:wght@400;500;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" media="print" href="/style/print.css">
    <title>Denim - Bestseller</title>
</head>
<body>
    <?php
        $id = $_GET['id'];
        $host = 'std-mysql';
        $database = 'std_931';
        $password = '12345678';
        $user = 'std_931';
        $link = mysqli_connect ($host, $user, $password, $database);
        $result = mysqli_fetch_assoc(mysqli_query($link, "SELECT * FROM `bestsellers` WHERE id='$id'"));
    ?>
    <header>
        <div class="menu">
            <div class="burger-cont">
                <div class="burger">
                    <span></span>
                </div>
            </div>
            <ul class="catalog">
                <li class="catalog__unit"><a class="catalog__link" href="/woman.html">Woman</a></li>
                <li class="catalog__unit"><a class="catalog__link" href="/man.html">Man</a></li>
                <li class="catalog__unit"><a class="catalog__link" href="/new.html">New</a></li>
            </ul>
            <a href="index.html" class="logo">
                Nimes
            </a>
            <ul class="purchases">
                <li class="purchases__unit"><a class="purchases__link" href="#">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#151C22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a></li>
                <li class="purchases__unit"><a class="purchases__link" href="#">
                    <svg width="20" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H4.63636L7.07273 12.4771C7.15586 12.8718 7.38355 13.2263 7.71595 13.4785C8.04835 13.7308 8.46427 13.8649 8.89091 13.8571H17.7273C18.1539 13.8649 18.5698 13.7308 18.9022 13.4785C19.2346 13.2263 19.4623 12.8718 19.5455 12.4771L21 5.28571H5.54545M9.18182 18.1429C9.18182 18.6162 8.7748 19 8.27273 19C7.77065 19 7.36364 18.6162 7.36364 18.1429C7.36364 17.6695 7.77065 17.2857 8.27273 17.2857C8.7748 17.2857 9.18182 17.6695 9.18182 18.1429ZM19.1818 18.1429C19.1818 18.6162 18.7748 19 18.2727 19C17.7707 19 17.3636 18.6162 17.3636 18.1429C17.3636 17.6695 17.7707 17.2857 18.2727 17.2857C18.7748 17.2857 19.1818 17.6695 19.1818 18.1429Z" stroke="#151C22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a></li>
            </ul>
        </div>
    </header>
    <main>
        <div class="product">
            <div class="photos">
                <div class="slider">
                    <div class="slider-main-photo">
                        <img src="<?= $result['img'] ?>" alt="main photo" class="slider-main-photo__image">
                    </div>
                </div>
            </div>
            <div class="characteristic">
                <h2 class="characteristic__name">
                    <?= $result['title'] ?>
                </h2>
                <p class="characteristic__caption">
                    <?= $result['text'] ?>
                </p>
                <div class="colors">
                    <h3 class="colors__name">
                        Color
                    </h3>
                    <div class="colors-set">
                        <a href="#" class="colors-set__unit colors-set__unit_first"></a>
                        <a href="#" class="colors-set__unit colors-set__unit_second"></a>
                        <a href="#" class="colors-set__unit colors-set__unit_third"></a>
                    </div>
                </div>
                <div class="sizes">
                    <h3 class="sizes__name">
                        Size
                    </h3>
                    <ul class="sizes-set">
                        <li class="sizes-set__unit"><a href="#" class="sizes-set__link sizes-set__link_xs">XS</a></li>
                        <li class="sizes-set__unit"><a href="#" class="sizes-set__link sizes-set__link_s sizes-set__link_active">S</a></li>
                        <li class="sizes-set__unit"><a href="#" class="sizes-set__link sizes-set__link_m">M</a></li>
                        <li class="sizes-set__unit"><a href="#" class="sizes-set__link sizes-set__link_l">L</a></li>
                        <li class="sizes-set__unit"><a href="#" class="sizes-set__link sizes-set__link_xl">XL</a></li>
                    </ul>
                </div>
                <p class="characteristic__price">
                    $ <?= $result['price'] ?>
                </p>
                <a class="characteristic__button">
                    Add to cart
                </a>
            </div>
        </div>
    </main>
    <footer class="footer">
        <div class="sections">
            <a href="index.html" class="sections__name">Nimes</a>
            <a href="/index.html" class="sections__unit_shop">Shop</a>
            <a href="/index.html" class="sections__unit_delivery">Delivery</a>
            <a href="/index.html" class="sections__unit_service">Service</a>
            <a href="/index.html" class="sections__unit_sitemap">Sitemap</a>
            <a href="/index.html" class="sections__unit_contacts">Contacts</a>
        </div>
        <div class="social-networks">
            <a href="https://www.facebook.com/" class="social-networks__unit">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58268 11.5H10.1868L11.2285 7.5H7.58268V5.5C7.58268 4.47 7.58268 3.5 9.66602 3.5H11.2285V0.14C10.8889 0.0970001 9.60664 0 8.25247 0C5.42435 0 3.41602 1.657 3.41602 4.7V7.5H0.291016V11.5H3.41602V20H7.58268V11.5Z" fill="white"/>
                </svg>
            </a>
            <a href="https://www.instagram.com/" class="social-networks__unit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z" fill="white"/>
                </svg>
            </a>
            <a href="https://www.pinterest.ru/" class="social-networks__unit">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9277 0.094077C9.43524 -0.235068 6.90293 0.312629 4.79833 1.63604C2.69372 2.95944 1.15897 4.96918 0.477463 7.29414C-0.204044 9.61911 0.0137216 12.1023 1.09055 14.2851C2.16738 16.468 4.03054 18.2031 6.336 19.1701C6.27366 18.4019 6.33088 17.6291 6.5058 16.8771C6.6985 16.0381 7.8558 11.4141 7.8558 11.4141C7.62535 10.9182 7.51018 10.38 7.5183 9.83708C7.5183 8.35208 8.41101 7.24408 9.52142 7.24408C9.72091 7.24129 9.91868 7.27977 10.1013 7.35691C10.2839 7.43404 10.4471 7.54802 10.5797 7.6911C10.7123 7.83418 10.8113 8.00299 10.8699 8.18607C10.9285 8.36914 10.9454 8.56219 10.9193 8.75208C10.9193 9.65208 10.3173 11.0141 10.0027 12.2921C9.9405 12.5265 9.93656 12.7716 9.99116 13.0077C10.0458 13.2438 10.1574 13.4643 10.317 13.6514C10.4766 13.8385 10.6798 13.987 10.9102 14.0849C11.1406 14.1828 11.3917 14.2274 11.6433 14.2151C13.6204 14.2151 14.9454 11.7841 14.9454 8.91408C14.9454 6.71408 13.4277 5.06608 10.6298 5.06608C9.96035 5.04111 9.29265 5.147 8.66718 5.37733C8.04172 5.60766 7.47154 5.95762 6.99127 6.40597C6.51099 6.85431 6.13065 7.39168 5.87332 7.98545C5.61599 8.57922 5.48706 9.21701 5.49434 9.86008C5.46451 10.5734 5.70424 11.273 6.16934 11.8301C6.25625 11.8924 6.31971 11.9801 6.35014 12.08C6.38058 12.1799 6.37635 12.2867 6.33809 12.3841C6.29017 12.5681 6.16934 13.0071 6.12142 13.1681C6.11145 13.2227 6.08827 13.2743 6.05374 13.3187C6.0192 13.3631 5.97428 13.3991 5.9226 13.4238C5.87091 13.4486 5.81391 13.4613 5.75617 13.461C5.69843 13.4607 5.64157 13.4473 5.59017 13.4221C4.1485 12.8681 3.46934 11.3451 3.46934 9.60608C3.46934 6.75908 5.95267 3.35108 10.9214 3.35108C14.8756 3.35108 17.5048 6.12808 17.5048 9.09808C17.5048 13.0071 15.237 15.9461 11.886 15.9461C11.3852 15.9614 10.8884 15.8553 10.4416 15.6375C9.99475 15.4198 9.61236 15.0973 9.32976 14.7001C9.32976 14.7001 8.72767 17.0161 8.60892 17.4541C8.36652 18.2108 8.00883 18.9289 7.54746 19.5851C8.50892 19.8651 9.50788 20.0051 10.512 20.0011C11.8804 20.0021 13.2354 19.7441 14.4997 19.2417C15.764 18.7392 16.9126 18.0024 17.8798 17.0732C18.847 16.144 19.6138 15.0408 20.1363 13.8268C20.6587 12.6127 20.9266 11.3117 20.9245 9.99808C20.9233 7.58308 20.0118 5.25007 18.3585 3.42986C16.7052 1.60964 14.4218 0.425141 11.9298 0.095077L11.9277 0.094077Z" fill="white"/>
                </svg>
            </a>
            <a href="https://twitter.com/" class="social-networks__unit">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1623 2.65593C20.3989 2.99362 19.5893 3.2154 18.7603 3.31393C19.6341 2.79136 20.288 1.96894 20.6003 0.999927C19.7803 1.48793 18.8813 1.82993 17.9443 2.01493C17.3149 1.34151 16.4807 0.89489 15.5713 0.744511C14.6618 0.594133 13.7282 0.748418 12.9156 1.18338C12.1029 1.61834 11.4567 2.30961 11.0774 3.14972C10.6981 3.98983 10.607 4.93171 10.8183 5.82893C9.15541 5.74558 7.52863 5.31345 6.04358 4.56059C4.55854 3.80773 3.24843 2.75097 2.1983 1.45893C1.82659 2.09738 1.63125 2.82315 1.6323 3.56193C1.6323 5.01193 2.3703 6.29293 3.4923 7.04293C2.82831 7.02202 2.17893 6.84271 1.5983 6.51993V6.57193C1.5985 7.53763 1.93267 8.47354 2.54414 9.22099C3.15562 9.96843 4.00678 10.4814 4.9533 10.6729C4.33691 10.84 3.6906 10.8646 3.0633 10.7449C3.33016 11.5762 3.8503 12.3031 4.55089 12.824C5.25147 13.3449 6.09743 13.6337 6.9703 13.6499C6.10278 14.3313 5.10947 14.8349 4.04718 15.1321C2.98488 15.4293 1.87442 15.5142 0.779297 15.3819C2.69099 16.6114 4.91639 17.264 7.1893 17.2619C14.8823 17.2619 19.0893 10.8889 19.0893 5.36193C19.0893 5.18193 19.0843 4.99993 19.0763 4.82193C19.8952 4.23009 20.6019 3.49695 21.1633 2.65693L21.1623 2.65593Z" fill="white"/>
                </svg>
            </a>
        </div>
    </footer>
    <script src="/scripts/burger.js"></script>
    <script src="/scripts/item.js"></script>
</body>
</html>