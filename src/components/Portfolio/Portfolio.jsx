import React from 'react';
import '../../styles/base.css';
import '../../styles/portfolio.css';
import { Link } from 'gatsby';
// import Config from '../../../data/SiteConfig';

const Portfolio = () => {
	return (
		<>
			<header className="site-header">
				<nav className="navigation">
					<h1 className="header-logo">&lt;JALAJ/&gt;</h1>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<Link to="/blog">Blog</Link>
						</li>
						<li>
							<Link to="#about">About</Link>
						</li>
					</ul>
				</nav>
			</header>
			<div className="info">
				<h2>Hello there!</h2>
				<h3>I am Jalaj</h3>
				<p>A fullstack Web Developer</p>
			</div>
			<div className="header-image">
				<svg width="1201" height="1031" viewBox="0 0 1201 1031" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="1201" height="1031" fill="transparent" />
					<g id="undraw dev productivity umsq (1) 1">
						<path
							id="Vector"
							d="M777.36 934.378C777.36 934.378 770.202 936.816 758.562 940.272C732.831 947.946 685.22 960.677 644.872 963.221C610.134 965.435 580.779 960.109 575.411 937.564C573.11 927.87 576.373 919.896 583.486 913.344C604.72 893.761 660.181 886.745 704.168 884.336C716.59 883.663 728.079 883.349 737.644 883.229C753.885 883.02 764.532 883.349 764.532 883.349L764.788 884.336L777.36 934.378Z"
							fill="#A0616A"
						/>
						<path
							id="Vector 2"
							d="M657.159 1006.11C629.518 1040.16 515.408 968.831 475.496 942.232C466.804 936.442 461.631 932.777 461.631 932.777L498.144 884.336L509.708 869.002C509.708 869.002 520.054 874.463 535.348 883.349C535.905 883.678 536.461 884.007 537.033 884.336C550.221 892.041 566.778 902.109 583.486 913.344C606.54 928.857 629.849 946.555 644.872 963.221C659.565 979.512 666.317 994.816 657.159 1006.11Z"
							fill="#A0616A"
						/>
						<g id="me">
							<path
								id="Vector 3"
								d="M653.673 287.081C714.745 286.565 763.834 236.896 763.317 176.142C762.798 115.387 712.87 66.5528 651.798 67.068C590.724 67.5832 541.635 117.252 542.153 178.008C542.671 238.762 592.599 287.596 653.673 287.081Z"
								fill="#E8B9C0"
							/>
							<path
								id="Vector 4"
								d="M570.669 232.773C570.669 232.773 592.834 388.839 560.932 406.646C529.028 424.454 751.808 424.169 751.808 424.169C751.808 424.169 700.971 289.074 723.055 247.432L570.669 232.773Z"
								fill="#E8B9C0"
							/>
							<path
								id="Vector 5"
								d="M914.481 423.587L896.669 507.667L859.009 685.55L857.92 695.285L845.36 807.968L837.005 882.827L831.403 933.112C794.901 952.165 768.439 965.33 768.439 965.33C768.439 965.33 766.057 953.95 762.248 939.395C736.584 947.287 689.082 960.418 648.758 963.301C663.589 979.469 670.471 994.716 661.41 1006.09C634.06 1040.37 519.346 970.003 479.209 943.743C478.334 950.119 478.036 956.56 478.32 962.99L447.579 939.88L450.143 886.091L454.467 795.079L459.9 680.944C457.838 676.076 456.103 671.078 454.704 665.983C445.068 632.97 433.151 566.991 423.972 511.654C416.585 467.119 411 429.48 409.819 421.472C409.66 420.426 409.58 419.887 409.58 419.887L578.017 344.142C590.267 371.761 646.444 379.619 646.444 379.619C692.899 376.041 729.128 351.351 729.128 351.351L914.481 423.587Z"
								fill="white"
							/>
							<path
								id="Vector 6"
								d="M559.853 73.7946L539.108 65.7346C539.108 65.7346 581.936 18.022 642.12 21.6318L625.045 3.24694C625.045 3.24694 666.257 -13.5706 704.218 29.3428C724.174 51.9015 747.265 78.4211 761.776 108.392L783.918 108.205L774.85 128.526L807.367 148.496L774.137 145.14C776.209 156.209 776.61 167.524 775.324 178.709C773.996 189.899 768.349 200.138 759.576 207.263C759.576 207.263 733.483 154.68 733.412 146.445L733.588 167.031C733.588 167.031 712.754 148.679 712.649 136.327L701.493 150.833L695.661 128.235L626.308 151.467L637.429 132.844L594.249 139.385L610.973 116.597C610.973 116.597 562.33 143.771 560.644 166.431C558.957 189.093 544.836 210.67 544.836 210.67C544.836 210.67 505.607 105.133 559.853 73.7946Z"
								fill="#2F2E41"
							/>
							<path
								id="Vector 7"
								d="M1037.97 808.393C1026.81 820.635 999.052 839.166 965.385 859.257C952.861 866.724 939.529 874.422 925.923 882.077C893.459 900.348 859.46 918.468 831.403 933.112C794.901 952.165 768.439 965.33 768.439 965.33C768.439 965.33 766.056 953.95 762.248 939.395C757.148 919.914 749.504 894.741 741.665 883.632C741.391 883.244 741.118 882.888 740.844 882.531C738.563 879.603 736.277 877.902 734.038 877.92L845.36 807.968L893.466 777.731L857.919 695.283L813.335 591.863L838.999 508.153L864.796 424.006L914.481 423.587C914.481 423.587 931.236 459.171 952.697 508.81C955.905 516.233 959.22 523.969 962.596 531.959C1006.77 636.311 1061.97 782.085 1037.97 808.393Z"
								fill="#EEEEEE"
							/>
							<path
								id="Vector 8"
								d="M538.556 884.357C534.476 884.375 530.404 884.74 526.384 885.446C491.864 891.647 481.932 922.864 479.209 943.743C478.334 950.118 478.036 956.56 478.32 962.989L447.579 939.88L436.378 931.462C409.517 922.398 385.511 906.099 364.653 886.811C346.556 869.78 330.292 850.92 316.125 830.536C302.016 810.444 289.409 789.349 278.41 767.421C275.342 761.3 273.663 754.585 273.493 747.748C273.323 740.911 274.666 734.121 277.427 727.857L314.532 643.691L368.766 520.676C369.147 517.756 369.569 514.9 370.031 512.108C380.462 449.486 409.594 421.473 409.594 421.473L432.029 421.283L447.808 511.452L467.41 623.477L454.704 665.981L425.342 764.146L454.465 795.079L538.556 884.357Z"
								fill="#EEEEEE"
							/>
						</g>
						<path
							id="Vector 9"
							d="M560.744 621.967L579.923 644.228C587.05 642.877 594.493 641.288 602.158 639.505L596.648 621.967L610.119 637.601C691.321 617.732 791.973 579.105 791.973 579.105C791.973 579.105 683.309 587.031 602.176 569.398C566.279 561.596 529.345 579.298 514.614 612.785C506.051 632.249 507.397 649.112 537.764 649.112C548.024 648.939 558.256 647.981 568.371 646.249L560.744 621.967Z"
							fill="#38D39F"
						/>
						<path
							id="Vector 10"
							d="M998.017 987.86V996.94C998.023 999.433 997.558 1001.9 996.648 1004.23C996.245 1005.26 995.757 1006.26 995.19 1007.22C993.397 1010.21 990.854 1012.69 987.809 1014.41C984.765 1016.13 981.323 1017.03 977.82 1017.03H306.285C302.784 1017.03 299.342 1016.13 296.297 1014.41C293.251 1012.69 290.708 1010.21 288.916 1007.22C288.349 1006.26 287.862 1005.26 287.457 1004.23C286.549 1001.9 286.084 999.433 286.089 996.94V987.86C286.089 985.221 286.61 982.609 287.626 980.17C288.639 977.732 290.128 975.518 292.003 973.651C293.878 971.785 296.106 970.306 298.555 969.296C301.007 968.286 303.632 967.767 306.285 967.768H344.994V963.535C344.994 963.424 345.016 963.315 345.058 963.213C345.1 963.111 345.162 963.02 345.24 962.942C345.319 962.865 345.412 962.802 345.514 962.76C345.616 962.718 345.726 962.697 345.836 962.697H366.032C366.144 962.697 366.253 962.718 366.356 962.76C366.458 962.802 366.551 962.865 366.629 962.942C366.707 963.02 366.769 963.111 366.811 963.213C366.853 963.315 366.874 963.424 366.874 963.535V967.768H379.492V963.535C379.492 963.424 379.514 963.315 379.556 963.213C379.598 963.111 379.66 963.02 379.738 962.942C379.816 962.865 379.91 962.802 380.012 962.76C380.114 962.718 380.224 962.697 380.334 962.697H400.53C400.641 962.697 400.751 962.718 400.853 962.76C400.956 962.802 401.047 962.865 401.126 962.942C401.205 963.02 401.267 963.111 401.309 963.213C401.351 963.315 401.372 963.424 401.372 963.535V967.768H414.004V963.535C414.004 963.424 414.027 963.315 414.069 963.213C414.111 963.111 414.173 963.02 414.251 962.942C414.329 962.865 414.422 962.802 414.525 962.76C414.627 962.718 414.737 962.697 414.847 962.697H435.043C435.154 962.697 435.264 962.718 435.366 962.76C435.469 962.802 435.56 962.865 435.639 962.942C435.718 963.02 435.78 963.111 435.822 963.213C435.864 963.315 435.885 963.424 435.885 963.535V967.768H448.502V963.535C448.502 963.424 448.525 963.315 448.567 963.213C448.609 963.111 448.671 963.02 448.749 962.942C448.827 962.865 448.92 962.802 449.023 962.76C449.125 962.718 449.235 962.697 449.344 962.697H469.541C469.652 962.697 469.762 962.718 469.864 962.76C469.966 962.802 470.058 962.865 470.136 962.942C470.215 963.02 470.278 963.111 470.32 963.213C470.362 963.315 470.383 963.424 470.383 963.535V967.768H483V963.535C483 963.424 483.021 963.315 483.065 963.213C483.107 963.111 483.169 963.02 483.247 962.942C483.325 962.865 483.418 962.802 483.52 962.76C483.623 962.718 483.732 962.697 483.842 962.697H504.039C504.15 962.697 504.26 962.718 504.362 962.76C504.464 962.802 504.556 962.865 504.634 962.942C504.712 963.02 504.776 963.111 504.818 963.213C504.86 963.315 504.881 963.424 504.881 963.535V967.768H517.513V963.535C517.513 963.424 517.536 963.315 517.578 963.213C517.62 963.111 517.681 963.02 517.76 962.942C517.838 962.865 517.931 962.802 518.033 962.76C518.136 962.718 518.245 962.697 518.355 962.697H538.552C538.663 962.697 538.773 962.718 538.875 962.76C538.977 962.802 539.069 962.865 539.147 962.942C539.227 963.02 539.289 963.111 539.331 963.213C539.373 963.315 539.394 963.424 539.394 963.535V967.768H552.011V963.535C552.011 963.424 552.033 963.315 552.076 963.213C552.118 963.111 552.179 963.02 552.258 962.942C552.336 962.865 552.429 962.802 552.531 962.76C552.633 962.718 552.743 962.697 552.853 962.697H711.056C711.167 962.697 711.277 962.718 711.379 962.76C711.482 962.802 711.573 962.865 711.653 962.942C711.731 963.02 711.793 963.111 711.835 963.213C711.877 963.315 711.898 963.424 711.898 963.535V967.768H724.53V963.535C724.53 963.424 724.551 963.315 724.595 963.213C724.637 963.111 724.699 963.02 724.777 962.942C724.855 962.865 724.948 962.802 725.051 962.76C725.153 962.718 725.263 962.697 725.372 962.697H745.569C745.791 962.698 746.005 962.788 746.163 962.945C746.319 963.101 746.41 963.313 746.411 963.535V967.768H759.028V963.535C759.028 963.424 759.051 963.315 759.093 963.213C759.135 963.111 759.197 963.02 759.275 962.942C759.353 962.865 759.446 962.802 759.548 962.76C759.651 962.718 759.761 962.697 759.87 962.697H780.067C780.178 962.697 780.288 962.718 780.39 962.76C780.492 962.802 780.586 962.865 780.664 962.942C780.742 963.02 780.804 963.111 780.846 963.213C780.888 963.315 780.909 963.424 780.909 963.535V967.768H793.526V963.535C793.526 963.424 793.549 963.315 793.591 963.213C793.633 963.111 793.694 963.02 793.773 962.942C793.851 962.865 793.944 962.802 794.046 962.76C794.149 962.718 794.258 962.697 794.368 962.697H814.565C814.676 962.697 814.786 962.718 814.888 962.76C814.99 962.802 815.083 962.865 815.162 962.942C815.24 963.02 815.301 963.111 815.344 963.213C815.386 963.315 815.407 963.424 815.407 963.535V967.768H828.039V963.535C828.039 963.424 828.062 963.315 828.104 963.213C828.146 963.111 828.207 963.02 828.286 962.942C828.364 962.865 828.457 962.802 828.559 962.76C828.662 962.718 828.771 962.697 828.881 962.697H849.077C849.299 962.7 849.511 962.79 849.665 962.947C849.82 963.102 849.906 963.315 849.905 963.535V967.768H862.537V963.535C862.537 963.424 862.559 963.315 862.601 963.213C862.644 963.111 862.705 963.02 862.783 962.942C862.862 962.865 862.955 962.802 863.057 962.76C863.159 962.718 863.269 962.697 863.379 962.697H883.575C883.687 962.697 883.796 962.718 883.899 962.76C884.001 962.802 884.094 962.865 884.172 962.942C884.251 963.02 884.312 963.111 884.354 963.213C884.396 963.315 884.417 963.424 884.417 963.535V967.768H897.035V963.535C897.035 963.424 897.057 963.315 897.099 963.213C897.141 963.111 897.203 963.02 897.281 962.942C897.359 962.865 897.453 962.802 897.555 962.76C897.657 962.718 897.767 962.697 897.877 962.697H918.073C918.184 962.697 918.294 962.718 918.397 962.76C918.499 962.802 918.592 962.865 918.67 962.942C918.748 963.02 918.81 963.111 918.852 963.213C918.894 963.315 918.915 963.424 918.915 963.535V967.768H977.82C980.473 967.767 983.1 968.286 985.55 969.296C988.001 970.306 990.229 971.785 992.104 973.651C993.979 975.518 995.466 977.732 996.481 980.17C997.497 982.609 998.018 985.221 998.017 987.86Z"
							fill="#3F3D56"
						/>
						<path id="Vector 11" d="M1193.29 1004.23H90.9817V1007.22H1193.29V1004.23Z" fill="#3F3D56" />
						<path
							id="Vector 12"
							d="M943.945 605.438H693.643V600.305H580.148V605.438H328.814C324.324 605.438 320.017 607.212 316.842 610.37C313.666 613.53 311.882 617.813 311.882 622.28V963.237C311.882 967.704 313.666 971.987 316.842 975.147C320.017 978.305 324.324 980.079 328.814 980.079H943.945C948.436 980.079 952.743 978.305 955.917 975.147C959.093 971.987 960.877 967.704 960.877 963.237V622.28C960.877 620.069 960.439 617.879 959.588 615.835C958.737 613.792 957.49 611.935 955.917 610.37C954.346 608.807 952.479 607.567 950.425 606.72C948.371 605.873 946.169 605.438 943.945 605.438Z"
							fill="#3F3D56"
						/>
						<path
							id="Vector 13"
							d="M636.872 761.873C657.636 761.873 674.468 745.129 674.468 724.473C674.468 703.818 657.636 687.073 636.872 687.073C616.109 687.073 599.276 703.818 599.276 724.473C599.276 745.129 616.109 761.873 636.872 761.873Z"
							stroke="#D0CDE1"
							stroke-width="2"
							stroke-miterlimit="10"
						/>
						<path
							id="Vector 14"
							d="M624.841 775.337C645.605 775.337 662.437 758.593 662.437 737.937C662.437 717.282 645.605 700.537 624.841 700.537C604.078 700.537 587.246 717.282 587.246 737.937C587.246 758.593 604.078 775.337 624.841 775.337Z"
							fill="#D0CDE1"
						/>
						<path id="Vector 15" d="M163.084 989.112H120.978V1031H163.084V989.112Z" fill="#D0CDE1" />
						<path
							id="Vector 16"
							d="M137.526 956.2V1007.06H188.656V956.2H137.526ZM186.43 1004.85H139.736V958.414H186.43V1004.85Z"
							fill="#3F3D56"
						/>
						<path id="Vector 17" d="M1137.57 989.112H1095.46V1031H1137.57V989.112Z" fill="#D0CDE1" />
						<path
							id="Vector 18"
							d="M1112.01 956.2V1007.06H1163.14V956.2H1112.01ZM1160.91 1004.85H1114.22V958.414H1160.91V1004.85Z"
							fill="#3F3D56"
						/>
						<path
							id="Vector 19"
							d="M142.233 344.17C208.129 344.17 261.548 291.031 261.548 225.477C261.548 159.925 208.129 106.784 142.233 106.784C76.337 106.784 22.918 159.925 22.918 225.477C22.918 291.031 76.337 344.17 142.233 344.17Z"
							fill="#38D39F"
						/>
						<path
							id="Vector 20"
							d="M183.812 84.4294C173.008 83.0626 162.074 83.0626 151.27 84.4294C127.203 87.5731 104.547 97.5192 85.9907 113.088C67.4344 128.656 53.7571 149.193 46.5819 172.263C43.3184 182.775 41.4704 193.674 41.086 204.669C41.0318 206.198 40.9956 207.745 40.9956 209.292C41.0291 242.668 54.3725 274.669 78.097 298.27C101.822 321.871 133.99 335.145 167.542 335.179C170.235 335.179 172.929 335.088 175.586 334.926C181.824 334.537 188.024 333.683 194.134 332.373C223.311 326.131 249.332 309.834 267.602 286.357C285.871 262.882 295.214 233.738 293.979 204.075C292.743 174.411 281.01 146.137 260.853 124.244C240.694 102.351 213.407 88.2496 183.812 84.4294ZM207.15 325.072H207.132C196.94 328.531 186.332 330.63 175.586 331.312C172.929 331.491 170.235 331.581 167.542 331.581C134.95 331.542 103.706 318.645 80.6606 295.72C57.6153 272.794 44.651 241.713 44.6111 209.292C44.6111 207.745 44.6474 206.198 44.7015 204.669C45.9443 173.074 59.4249 143.18 82.3215 121.247C105.218 99.3147 135.755 87.043 167.542 87.001C196.665 87.0026 224.842 97.2899 247.054 116.03C269.264 134.77 284.066 160.745 288.821 189.329C293.576 217.912 287.978 247.247 273.021 272.106C258.063 296.965 234.719 315.735 207.15 325.072Z"
							fill="#3F3D56"
						/>
						<path id="Vector 21" d="M169.349 94.1948H165.734V119.372H169.349V94.1948Z" fill="#3F3D56" />
						<path
							id="Vector 22"
							d="M87.0083 126.635L84.4517 129.178L102.348 146.981L104.905 144.438L87.0083 126.635Z"
							fill="#3F3D56"
						/>
						<path id="Vector 23" d="M51.8425 207.492V211.09H77.1517V207.492H51.8425Z" fill="#3F3D56" />
						<path
							id="Vector 24"
							d="M84.4517 289.406L87.0083 291.949L104.905 274.147L102.348 271.603L84.4517 289.406Z"
							fill="#3F3D56"
						/>
						<path
							id="Vector 25"
							d="M230.179 144.437L232.736 146.981L250.631 129.178L248.075 126.634L230.179 144.437Z"
							fill="#3F3D56"
						/>
						<path id="Vector 26" d="M257.931 207.492V211.09H283.241V207.492H257.931Z" fill="#3F3D56" />
						<path
							id="Vector 27"
							d="M232.736 271.602L230.179 274.145L248.075 291.949L250.631 289.406L232.736 271.602Z"
							fill="#3F3D56"
						/>
						<path id="Vector 28" d="M169.349 299.211H165.734V324.388H169.349V299.211Z" fill="#3F3D56" />
						<path
							id="Vector 29"
							d="M172.965 202.098C171.401 200.931 169.498 200.299 167.542 200.299C165.587 200.299 163.683 200.931 162.119 202.098C161.047 202.907 160.166 203.938 159.534 205.12C158.732 206.639 158.387 208.357 158.535 210.068C158.684 211.778 159.322 213.41 160.375 214.772C161.426 216.133 162.847 217.167 164.471 217.75C166.094 218.332 167.852 218.441 169.534 218.063C171.219 217.684 172.757 216.835 173.971 215.613C175.184 214.392 176.02 212.851 176.381 211.171C176.742 209.492 176.611 207.745 176.007 206.138C175.401 204.53 174.347 203.128 172.966 202.098H172.965ZM167.542 214.687C166.104 214.682 164.728 214.112 163.712 213.102C162.695 212.091 162.124 210.721 162.119 209.292C162.125 208.2 162.459 207.136 163.077 206.234C163.606 205.471 164.325 204.856 165.163 204.451C166.002 204.044 166.931 203.86 167.862 203.917C168.792 203.972 169.692 204.265 170.476 204.77C171.258 205.272 171.898 205.968 172.332 206.789C172.765 207.61 172.978 208.529 172.951 209.455C172.924 210.383 172.656 211.286 172.175 212.08C171.692 212.875 171.014 213.532 170.202 213.988C169.39 214.444 168.474 214.685 167.542 214.687Z"
							fill="#3F3D56"
						/>
						<path id="Vector 30" d="M183.812 52.832H151.272V85.203H183.812V52.832Z" fill="#3F3D56" />
						<path
							id="Vector 31"
							d="M167.542 58.2268C191.504 58.2268 210.929 51.3829 210.929 42.9405C210.929 34.4981 191.504 27.6542 167.542 27.6542C143.579 27.6542 124.154 34.4981 124.154 42.9405C124.154 51.3829 143.579 58.2268 167.542 58.2268Z"
							fill="#3F3D56"
						/>
						<path id="clock arrow" d="M162.914 212.384V140.08H172.44V212.384H162.914Z" fill="#3F3D56" />
						<path id="Vector 32" d="M339.866 329.699H0V333.296H339.866V329.699Z" fill="#3F3D56" />
						<g id="plant left">
							<path
								id="Vector 33"
								d="M226.468 897.154C227.871 944.951 199.796 962.468 164.564 963.491C163.746 963.515 162.931 963.53 162.12 963.535C160.487 963.548 158.869 963.521 157.266 963.454C125.403 962.139 100.181 945.312 98.876 900.861C97.5256 854.859 154.921 795.089 159.228 790.669L159.236 790.664C159.4 790.495 159.484 790.411 159.484 790.411C159.484 790.411 225.065 849.361 226.468 897.154Z"
								fill="#D0CDE1"
							/>
							<path
								id="Vector 34"
								d="M162.029 956.248L184.409 923.14L162.074 959.81L162.12 963.535C160.487 963.548 158.869 963.521 157.266 963.454L158.376 915.564L158.346 915.194L158.386 915.124L158.493 910.599L133.984 875.199L158.465 907.212L158.552 908.168L159.39 871.985L138.22 835.284L159.45 865.629L159.229 790.669V790.419L159.236 790.664L160.641 849.743L179.935 825.745L160.704 854.832L161.125 887.197L178.879 855.61L161.191 891.955L161.426 909.951L187.245 865.952L161.504 916.23L162.029 956.248Z"
								fill="#3F3D56"
							/>
						</g>
						<g id="plant right">
							<path
								id="Vector 35"
								d="M1200.95 897.154C1202.35 944.951 1174.28 962.468 1139.05 963.491C1138.23 963.515 1137.41 963.53 1136.6 963.535C1134.97 963.548 1133.35 963.521 1131.75 963.454C1099.88 962.139 1074.66 945.312 1073.36 900.861C1072.01 854.859 1129.4 795.089 1133.71 790.669L1133.72 790.664C1133.88 790.495 1133.97 790.411 1133.97 790.411C1133.97 790.411 1199.55 849.361 1200.95 897.154Z"
								fill="#D0CDE1"
							/>
							<path
								id="Vector 36"
								d="M1136.51 956.248L1158.89 923.14L1136.56 959.81L1136.6 963.535C1134.97 963.548 1133.35 963.521 1131.75 963.454L1132.86 915.564L1132.83 915.194L1132.87 915.124L1132.98 910.599L1108.47 875.199L1132.95 907.212L1133.03 908.168L1133.87 871.985L1112.7 835.284L1133.93 865.629L1133.71 790.669V790.419L1133.72 790.664L1135.12 849.743L1154.42 825.745L1135.19 854.832L1135.61 887.197L1153.36 855.61L1135.67 891.955L1135.91 909.951L1161.73 865.952L1135.99 916.23L1136.51 956.248Z"
								fill="#3F3D56"
							/>
						</g>
					</g>
				</svg>
			</div>
			<img className="splash" src="../../assets/splash.svg" alt="hii" />
			{/* <section>
				<div className="text">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque consectetur nulla fuga ab laborum
					exercitationem consequatur veniam, similique error unde dolorem repudiandae natus adipisci beatae
					nemo dicta culpa? Odio repellat accusamus voluptates adipisci, cum sit eaque. Ipsam maiores
					voluptate voluptatum aliquam, quae earum sapiente reiciendis, rerum eum accusantium quo, et
				</div>
			</section> */}
		</>
	);
};

export default Portfolio;
