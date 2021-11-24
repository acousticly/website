import React, { useEffect } from 'react'
import { IndexScript } from '../../script/Index'
import Link from 'next/link'
import Image from 'next/image'
import invite from '/public/static/svg/invite.svg'
import discord from '/public/static/svg/discord.svg'
import welcome from '/public/static/media/welcome.webp'
const Header = () => {
  useEffect(() => {
    setTimeout(() => {
      IndexScript()
    }, 100)
  }, [])
  return (
    <header className="home-header">
      <div className="home-header__hero">
        <div className="home-header__hero--left">
          <h1 className="home-header__h1">
            <span className="home-header__h1--span1">Experience Music</span>
            <span className="home-header__h1--span2">
              like never
              <svg
                className="oval-svg"
                width="258"
                height="86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M107.51.752c-.37.434-.67.48-1.024.157-.693-.632-3.763 1.033-4.254 2.306-.281.725-.313.541-.128-.73l.247-1.7-1.758.338c-2.57.495-3.315.548-3.757.268-.57-.36-3.132-.06-3.676.43-.303.275-.523.223-.638-.15-.143-.457-.438-.464-1.497-.035-.9.365-1.555.396-2.059.1-.563-.332-.932-.222-1.554.461-.678.745-1.102.842-2.516.58-.935-.174-1.88-.25-2.101-.17-.22.08-1.394.207-2.607.282-3.505.215-3.609.232-3.609.587 0 .185-.569.244-1.264.133-1.13-.183-1.24-.104-1.04.737.15.631.038.94-.34.94-.31 0-.564-.297-.564-.66 0-.44-.401-.661-1.203-.661-.695 0-1.203.233-1.203.55 0 .34-.621.574-1.625.61-1.848.067-2.433.462-1.572 1.06.4.277.428.412.089.417-.276.003-.501.304-.501.667 0 .364-.271.66-.602.66-.33 0-.602-.296-.602-.66 0-.363.18-.66.401-.66.221 0 .401-.199.401-.441 0-.665-1.086-.529-1.328.165-.13.37-.587.528-1.17.406-.885-.186-.945-.084-.793 1.346.157 1.471 1.15 2.501 1.655 1.717.128-.198.73-.394 1.336-.437.606-.042 1.328-.1 1.604-.127.276-.028.907.086 1.404.253.673.227.902.126.902-.398 0-.57.191-.62 1.028-.27 1.548.645 2.982.534 2.982-.232 0-.411.379-.661 1.003-.661.585 0 1.002.253 1.002.609 0 .834 3.173.887 3.462.057.116-.33.692-.59 1.282-.578 2.04.044 2.475-.091 2.475-.768 0-.374.225-.648.5-.609.277.04.914.048 1.418.02.785-.045.856-.178.493-.924-.347-.71-.312-.824.186-.614.336.142.61.534.61.872 0 .337.252.613.56.613.307 0 .66.295.787.654.335.96 5.171.705 6.273-.33.847-.798 1.812-1.05 1.432-.374-.12.215.234.485.788.602.554.116 1.106.036 1.226-.177a.406.406 0 0 1 .592-.135c.206.139.374.043.374-.214 0-.256.371-.466.825-.466.454 0 .714.198.578.44-.152.271.417.415 1.48.375 1.153-.044 1.369-.127.648-.247-.771-.13-1.014-.374-.847-.852.129-.37.344-.506.479-.304.38.569 1.975 1.469 2.604 1.469.31 0 1.396-.862 2.411-1.917 1.265-1.312 1.847-1.689 1.847-1.196 0 .396-.544 1.074-1.21 1.505-1.362.884-1.247 1.608.255 1.608.641 0 .902-.179.723-.496-.2-.356-.076-.372.435-.058.902.555 2.203.201 2.203-.6 0-.334.181-.608.401-.608.221 0 .401.264.401.587 0 .922 4.724.816 4.95-.11.141-.575.179-.562.217.073.054.888.868 1.014 1.571.243.365-.401.481-.403.481-.01 0 .577 7.043.551 7.886-.027.257-.177.559-.072.671.232.156.423.3.402.609-.086.223-.352.318-.796.211-.987-.108-.19.085-.228.427-.084.343.145.622.496.622.782 0 .568.766.698 3.81.645 1.103-.02 3.449.01 5.214.065 5.62.176 5.967.155 6.125-.365.107-.354.338-.309.753.147.755.83 3.238.846 5.007.034 1.168-.536 1.463-.536 2.13 0 .948.762 1.774.832 1.103.094-.655-.72-.605-1.233.12-1.233.331 0 .602.297.602.66 0 .364.316.678.702.697.386.02 1.243.083 1.905.14.661.057 1.335-.107 1.497-.366.197-.315.297-.288.301.08.003.303.412.548.909.544.627-.005.743-.117.382-.37-.419-.29-.404-.468.072-.902.483-.44.673-.375 1.028.353.26.534.676.791 1.035.64.331-.14.824-.052 1.097.194.808.727 2.13.796 2.84.148.432-.393.664-.432.664-.11 0 .525 1.295.686 1.725.215.577-.634 3.453-.593 3.782.054.349.685 2.067.875 4.633.511.835-.118 2.053-.046 2.707.16.654.206 1.189.214 1.189.02 0-.196.451-.355 1.002-.355.552 0 1.003.249 1.003.554 0 .662 1.51 1.186 1.692.587.069-.23.8-.584 1.623-.788 1.343-.333 1.497-.28 1.497.513 0 .782.173.848 1.504.575.827-.17 1.364-.154 1.193.035-.45.498 2.219 1.413 2.781.954.273-.223.574-.189.726.081.143.254.941.462 1.773.462.833 0 1.644.143 1.803.317.449.494 4.396.504 4.958.014.36-.315.501-.231.501.298 0 .589.381.73 1.905.707 1.047-.016 2.511.1 3.253.256.871.184 1.453.097 1.645-.245.229-.407.43-.393.859.058.812.855 2.64 1.67 2.958 1.32.499-.549 2.186-.353 2.407.278.17.49.339.509.796.093.578-.527 1.588-.233 1.252.364-.156.277.976.339 2.47.133.276-.037.516-.415.533-.84.025-.616.078-.638.265-.11.129.364.503.879.832 1.145.329.266.48.694.335.95-.162.289.029.383.503.247.42-.12 1.421.123 2.222.54.802.418 2.353.76 3.447.76 1.094 0 1.989.172 1.989.382 0 .21.27.382.601.382.331 0 .602-.22.602-.488s.271-.373.601-.233c.331.139.602.06.602-.174 0-.7 1.098-.483 1.361.27.359 1.03.333 1.066-.788 1.066-.98 0-.997.038-.333.767.497.546.745.61.863.224.112-.368.586-.188 1.483.563.834.7 1.575.998 2.014.813.411-.173.836-.042 1.042.322.19.338.668.615 1.062.615.393 0 .737.249.765.55.028.304.073.718.1.92.14 1.034 3.66 1.855 3.66.855 0-.297.281-.098.624.441.344.54.527 1.156.406 1.37-.293.52.519 1.182 1.888 1.542.664.174 1.556.993 2.206 2.026.6.954 1.314 1.742 1.585 1.75.272.01.617.556.767 1.215.151.658.606 1.588 1.013 2.068.501.591.644 1.162.445 1.777-.162.498-.255 1.686-.207 2.64.049.955-.181 2.187-.51 2.739-.329.551-.598 1.306-.598 1.678 0 .372-.181.627-.402.566-.221-.06-.63.386-.909.992-.279.605-.911 1.297-1.403 1.536-.492.24-.895.775-.895 1.19 0 .415-.255.913-.567 1.107-.312.193-.627.947-.702 1.674-.098.962-.354 1.334-.942 1.366-1.06.06-2.956 1.166-4.196 2.451-.547.566-1.041.985-1.099.93-.296-.275-4.022 1.564-4.82 2.38-.279.286-.507.755-.507 1.043 0 .3-.33.428-.771.301-.424-.121-1.331.153-2.015.61-.684.457-1.504.831-1.821.831-.318 0-1.246.644-2.062 1.431-.816.787-1.815 1.37-2.22 1.294-.518-.097-.736.134-.736.78 0 .774-.167.871-1.068.623-.885-.244-1.025-.17-.815.432.17.486.045.727-.378.727-.397 0-.546-.246-.401-.661.157-.45-.021-.66-.558-.66-.434 0-.79.164-.79.366 0 .202-.225.4-.501.442-4.408.66-6.629 1.593-6.794 2.852-.111.855-.182.881-.708.26-.596-.705-.616-.703-4.095.463-.81.271-2.148.589-2.974.704-.826.117-1.71.401-1.964.633-.254.23-1.532.55-2.841.71-1.32.16-3.223.782-4.274 1.398-1.521.89-2.01 1.004-2.481.575-.429-.391-.802-.408-1.387-.064-.441.26-1.418.471-2.17.471-.753 0-1.928.307-2.612.682-.766.42-2.814.764-5.33.897-2.248.12-4.398.4-4.779.624-.381.224-1.935.44-3.454.48-1.519.039-3.488.336-4.375.66-.888.324-2.782.625-4.211.67-1.818.056-2.879.32-3.539.885-.818.699-1.018.722-1.517.173-.419-.46-.841-.521-1.552-.225-.536.224-1.658.392-2.492.373-.835-.019-1.698.009-1.918.061-.221.053-.97.062-1.664.021-.695-.04-1.382.138-1.528.396-.145.259-.683.47-1.194.47-.512 0-1.151.292-1.42.65-.404.534-.582.547-1.015.07-.652-.715-5.246-.537-6.095.237-.455.415-.651.403-.909-.056-.246-.438-1.454-.566-4.785-.51-4.872.083-6.448.495-6.466 1.692-.012.724-.045.72-.448-.042-.353-.667-.504-.709-.79-.22-.278.473-.403.41-.58-.297-.153-.61-.604-.931-1.404-.998-.648-.054-1.178.077-1.178.291 0 .215-.541.32-1.203.236-.662-.085-1.203.026-1.203.246 0 .571-1.229.789-2.439.432-.78-.23-1.153-.1-1.507.525-.26.456-.777.829-1.15.829-.528 0-.572-.118-.197-.529 1.02-1.12.464-1.453-2.333-1.398-1.548.03-2.908-.11-3.022-.314-.305-.542-2.119.483-2.32 1.31-.139.573-.182.553-.219-.1-.042-.722-.38-.797-3.155-.69-1.709.065-3.507.273-3.996.462-.523.203-.993.157-1.143-.11-.141-.25-.531-.337-.867-.196-.337.142-.815.085-1.063-.126-1.3-1.11-3.02-.72-3.561.81-.186.525-.24.5-.266-.118-.022-.55-.353-.772-1.134-.76-.607.01-1.549-.036-2.093-.103-1.091-.133-1.692 1.266-.803 1.87.27.183.368.554.216.824-.397.707-1.03.602-1.03-.172 0-.363-.187-.66-.415-.66-.275 0-.263-.314.036-.927.435-.892.377-.92-1.59-.77-1.532.116-2.041.004-2.041-.45 0-.487-.117-.498-.602-.056-.365.333-.601.368-.601.09 0-.27-1.04-.462-2.507-.465-1.378-.003-4.52-.072-6.983-.152-2.462-.08-4.393.003-4.29.185.248.442-1.025-.088-2.2-.916-.683-.48-1.124-.537-1.604-.208-.37.253-1.018.302-1.465.11-1.181-.507-4.187-.47-5.97.074-1.175.359-1.633.346-1.857-.052-.169-.3-1.312-.554-2.651-.588-1.951-.05-2.51.11-3.257.93-1.123 1.234-1.895 1.316-1.221.13.567-.998.13-1.751-.57-.98-.691.758-1.304.638-.715-.14.274-.364.431-.671.35-.684a275.84 275.84 0 0 0-2.685-.267c-2.274-.22-2.642-.138-3.566.793l-1.03 1.039.265-1.212c.288-1.32.315-1.304-2.458-1.434-.937-.044-1.704.102-1.704.323 0 .222-.284.092-.63-.29-.347-.38-.949-.692-1.337-.692-.389 0-.822-.127-.963-.281-.14-.155-.938-.332-1.77-.394-3.848-.284-6.303-.699-6.795-1.147-.397-.362-.703-.336-1.18.1-.547.498-.725.469-1.163-.19-.39-.584-.57-.635-.729-.203-.165.45-.285.456-.56.03-.193-.297-.77-.453-1.283-.345-.513.11-1.941-.192-3.175-.668-1.233-.477-2.565-.754-2.958-.616-.44.153-.719.025-.723-.331-.004-.427-.11-.406-.404.08-.34.566-.498.521-1.096-.31-.385-.534-1.737-1.404-3.005-1.934-1.269-.529-2.306-1.093-2.306-1.253 0-.16-.632-.21-1.404-.11-1.29.165-1.403.086-1.403-.981 0-.944-.23-1.211-1.234-1.432-.87-.19-1.54-.803-2.273-2.081-.573-.996-.998-1.878-.946-1.961.052-.083-.166-.38-.486-.661-.319-.28-.693-1.648-.831-3.038-.221-2.223-.154-2.594.554-3.08.442-.303.805-1 .805-1.548 0-.547.172-.995.382-.995.21 0 .682-.694 1.048-1.542.366-.848.916-1.542 1.222-1.542.306 0 .556-.25.556-.554 0-.306.36-.803.802-1.106.441-.302.802-.922.802-1.376 0-.471.365-.93.852-1.07.685-.198.8-.466.594-1.374-.252-1.101.264-1.568.76-.687.136.242.398.44.582.44.498 0 .867-1.325.532-1.912-.16-.281-.24-.858-.177-1.282.063-.424-.087-.77-.334-.77-.248 0-.342.192-.21.427.133.235-.211.552-.764.704-.552.153-1.113.654-1.246 1.114-.133.461-.41.838-.616.838-.206 0-.374.241-.374.537 0 .295-.48.99-1.066 1.543-.587.554-1.265 1.452-1.506 1.996-.242.545-1.021 1.288-1.732 1.651-.713.364-1.297 1.001-1.302 1.418-.005.49-.22.668-.61.504-.698-.294-.758.212-.213 1.786.321.929.25 1.203-.413 1.593-.44.259-.69.667-.554.908.136.24.016.743-.265 1.115-.38.504-.4.876-.072 1.452.27.474.302 1.016.083 1.396-.488.846-.466 3.045.03 3.045.221 0 .416.545.433 1.211.017.666.123.964.234.661.263-.714.861-.714.804 0-.074.93 1.453 3.855 2.012 3.855.29 0 .528.279.528.62 0 .388.28.539.75.403.515-.147 1.029.213 1.632 1.143.484.747 1.23 1.358 1.655 1.358.426 0 .775.298.775.661 0 .364.27.661.601.661.331 0 .602.215.602.477 0 .263.226.386.501.275.276-.11.459-.417.406-.681-.052-.264.173-.367.501-.228.329.138.597.505.597.815 0 .55 2.291 1.985 3.169 1.985.242 0 .44.169.44.374s.56.39 1.244.412c.684.021 1.565.359 1.958.75.48.476 1.06.615 1.764.42.616-.17 1.05-.104 1.05.158 0 .246.36.343.802.217.905-.26 1.052-.825.3-1.158-.275-.122-.095-.238.402-.257.521-.02.902.226.902.583 0 .736 2.233 1.785 3.509 1.648.496-.053.902.088.902.314 0 .681 1.267.994 1.856.458.426-.389.55-.349.55.178 0 .513.613.74 2.507.927 1.378.136 3.02.225 3.65.2 1.029-.042 1.12-.169.919-1.274-.158-.863-.04-1.304.393-1.487.937-.395 1.06-.323.79.454-.192.55-.063.66.558.482 1.03-.296 1.038.19.017.998-.729.577-.74.688-.15 1.405.452.549.84.662 1.314.383.381-.225.915-.231 1.233-.015.309.21.69.293.847.186.158-.107.798.021 1.423.285.625.264 2.039.569 3.142.677 1.103.109 2.343.312 2.757.452.49.166.656.085.478-.233-.412-.731.4-.587.976.173.705.934 1.203.82 1.203-.274 0-.684.134-.82.501-.505.276.237 1.088.648 1.805.912 1.223.453 1.303.419 1.303-.545 0-.656.29-1.11.8-1.257.63-.181.728-.086.456.448-.606 1.188.849 2.274 3.032 2.263 1.06-.005 2.696.184 3.635.42.996.25 1.799.264 1.928.034.122-.217.03-.395-.203-.395s-.424-.154-.424-.344c0-.544 2.27-1.341 2.799-.983.312.213.154.423-.46.613l-.936.29.913.842c1.159 1.071 6.819 1.228 7.178.2.287-.82.932-.79.932.043 0 .406.376.661.976.661.82 0 .97-.207.942-1.3-.025-.95-.251-1.335-.841-1.431-.705-.116-.73-.203-.202-.68.512-.465.754-.232 1.57 1.511l.964 2.06.227-1.291c.125-.71.088-1.729-.083-2.262-.24-.752-.179-.915.274-.724.321.135.587.473.59.75.004.301.147.26.357-.104.492-.854 1.325-.156 1.03.865-.134.464-.063.844.157.844s.516.396.656.88c.14.486.513.882.829.882.316 0 .575.198.575.44 0 .588 1.452.561 2.483-.045.635-.373.907-.347 1.17.11.268.463.346.425.35-.175.008-.919 1.094-1.011 1.98-.17.349.331 1.31.715 2.137.854 1.173.197 1.504.106 1.504-.41 0-.665.975-.548 2.385.286.32.19.99.173 1.49-.036.546-.228 1.004-.21 1.148.044.35.622 2.902.517 3.1-.127.122-.397.326-.421.735-.085.311.256 1.603.515 2.87.576 2.038.097 2.416-.023 3.277-1.044l.974-1.154.131 1.019c.124.957.29 1.013 2.738.923 1.434-.053 2.788-.116 3.008-.142.221-.025 2.865.092 5.877.258 5.137.285 5.487.253 5.668-.52.17-.726.198-.732.239-.051.041.687.488.966 1.332.83.611-.1 12.212-.594 13.251-.566.607.017 1.103-.155 1.103-.382 0-.249.369-.257.936-.02.515.215 1.175.228 1.468.03.295-.201.833-.156 1.206.1.419.287 1.267.328 2.242.106.862-.196 1.731-.313 1.931-.26.201.054.494-.131.651-.411.216-.385.498-.385 1.148-.003.474.278 1.026.395 1.226.258.201-.136 1.495-.344 2.877-.462 1.381-.118 2.628-.422 2.771-.675.142-.254.604-.455 1.025-.445a64.71 64.71 0 0 0 3.072-.006c.386-.012.702-.306.702-.655 0-.348.27-.633.601-.633.331 0 .602.198.602.44 0 .243.259.44.576.44.41 0 .57-.514.554-1.782-.012-.982.089-1.907.226-2.057.136-.15.248.247.248.882 0 1.289.766 3.398 1.235 3.398.751 0 1.572-.586 1.572-1.122 0-.992.894-1.26 1.445-.431.618.928 1.966.567 1.617-.433-.134-.384-.003-.657.316-.657.301 0 .65.297.777.66.127.364.643.639 1.146.61.679-.037.734-.103.213-.252-.815-.234-.951-1.018-.177-1.018.289 0 .875.281 1.302.624.549.441.926.49 1.28.167.354-.323.502-.306.502.056 0 .342.438.424 1.304.247 1.392-.286 1.864-.374 5.915-1.104 1.434-.258 2.968-.652 3.409-.875.441-.223 1.253-.385 1.804-.36 1.434.068 4.144-.52 4.592-.995.209-.222.723-.403 1.141-.403.418 0 1.24-.37 1.825-.823.725-.56 1.32-.71 1.866-.472 1.269.556 1.8.47 1.549-.247-.146-.419.005-.661.414-.661.354 0 .644.198.644.44 0 .243.271.441.602.441.71 0 .717-.048.21-1.513-.254-.735-.254-1.13 0-1.13.215 0 .391.297.391.66 0 .364.346.661.769.661.423 0 .828.192.902.427.078.25.898.125 1.979-.303 1.397-.553 1.958-1.056 2.305-2.068l.46-1.338.611.958c.581.911.689.927 2.249.322.901-.35 1.773-.543 1.939-.43.165.111.219-.263.119-.833-.176-1.019.718-2.176.989-1.28.077.25.373.807.659 1.237.459.69.705.719 2.091.244.864-.295 2.336-.916 3.271-1.38.935-.463 1.976-.842 2.313-.842.338 0 1.329-.496 2.203-1.102.873-.605 1.849-1.101 2.169-1.101.319 0 .819-.248 1.111-.55.291-.303 1.135-.605 1.876-.67.74-.065 1.728-.411 2.194-.77.467-.36 1.169-.653 1.562-.653.391 0 .712-.298.712-.661 0-.37.358-.66.815-.66.448 0 .918-.298 1.045-.662.127-.363.667-.66 1.201-.66.665 0 1.089-.346 1.35-1.102.373-1.078 1.203-1.534 1.203-.66 0 .65.774.534 1.461-.221.331-.364.907-.66 1.28-.66s.857-.43 1.074-.956c.218-.526.756-1.17 1.195-1.432.44-.262 1.198-.922 1.686-1.468.487-.545 1.029-1 1.205-1.01.177-.01.772-.64 1.323-1.402.551-.762 1.5-1.904 2.109-2.538 1.475-1.54 3.819-6.711 2.696-5.949-.811.552-.526-1.53.508-3.713.623-1.314.99-2.503.817-2.644-.174-.14-.315-1.627-.316-3.303-.001-2.043-.166-3.108-.501-3.231-.276-.1-.501-.443-.501-.76 0-.318-.254-.684-.563-.815-.31-.13-.685-.843-.833-1.584-.148-.74-.436-1.46-.64-1.598-.203-.138-.376-.685-.384-1.216-.008-.53-.414-1.469-.903-2.084-1.215-1.533-3.895-3.657-3.895-3.089 0 .255-.271.463-.602.463-.33 0-.601-.166-.601-.37 0-.203-.451-.596-1.003-.871-.551-.277-1.007-.853-1.012-1.283-.01-.797-2.289-2.322-3.472-2.322-.352 0-.897-.347-1.211-.771-.393-.53-.634-.607-.771-.248-.136.355-.463.236-1.012-.368-.564-.62-1.108-.81-1.78-.625-.543.15-.968.072-.968-.177 0-.719-2.876-2.496-4.612-2.85-.882-.18-1.789-.494-2.015-.7-.83-.753-5.019-2.051-7.947-2.463-.917-.128-2.254-.402-2.971-.606-.882-.252-1.303-.217-1.303.11 0 .264-.406.069-.902-.435-.567-.575-1.649-.997-2.908-1.134a37.083 37.083 0 0 1-4.01-.712c-1.103-.272-3.05-.571-4.328-.667-1.278-.094-2.541-.363-2.807-.596-.266-.233-1.748-.442-3.292-.464-2.766-.04-3.424-.13-4.611-.631-1.08-.455-4.813-.641-4.813-.24 0 .215-.333.196-.74-.044-.51-.3-.885-.277-1.204.073-.349.383-.462.357-.462-.105 0-.446-.137-.407-.505.145-.569.856-2.183.774-2.695-.135-.22-.39-.746-.49-1.591-.305-.86.189-1.178.125-.995-.2.168-.3-.074-.277-.65.062-.761.447-.998.423-1.374-.142-.407-.612-.501-.607-.91.054-.423.683-.458.68-.48-.034-.013-.424-.069-.789-.124-.81-.055-.022-1.893-.128-4.085-.235-2.192-.108-4.206-.397-4.476-.643-.336-.306-.58-.289-.773.054-.184.327-.789.39-1.74.182-2.483-.544-4.064-.5-4.064.115 0 .311-.181.566-.401.566-.221 0-.356-.223-.301-.495.055-.273-.351-.55-.903-.615a10.73 10.73 0 0 1-1.904-.437c-.683-.24-.903-.145-.903.394 0 .392.211.713.468.713s.333.148.168.33c-.165.18-.527-.012-.805-.429-.685-1.03-2.554-1.102-4.188-.162-1.063.611-1.446.661-1.804.233-.344-.409-.333-.466.046-.231.307.19.501.045.501-.376 0-.378-.231-.687-.512-.687-.624 0-2.311 1.2-2.997 2.131-.436.592-.501.551-.501-.314 0-.795-.162-.939-.802-.716-.572.2-.802.08-.802-.417 0-.51-.35-.676-1.304-.615-.717.046-1.595.24-1.952.432s-.759.229-.892.082c-.134-.147-1.899-.324-3.922-.393-2.782-.094-3.907.04-4.618.551-.788.567-.973.578-1.153.063-.225-.643-1.699-.756-2.528-.193-.268.182-.402.483-.297.67.104.185-.056.724-.358 1.197-.467.733-1.801 1.003-3.028.614-.339-.108 1.782-1.033 2.155-.94.193.048.237-.235.1-.628-.137-.393-.25-.898-.25-1.122 0-.237-1.303-.3-3.107-.15-3.666.304-3.601.305-5.013-.065-.844-.222-1.103-.128-1.103.396 0 .608-.126.614-1.103.054-1.51-.865-4.511-.809-5.701.107-.685.527-1.012.59-1.125.22-.233-.768-2.313-.638-2.933.183-.485.642-.591.628-1.166-.152-.537-.729-.71-.765-1.154-.243Zm5.161 1.23c0 .364-.18.686-.401.716l-.816.11c-.229.03-.587.353-.796.716-.54.937-.52-.237.022-1.35.489-1.004 1.991-1.148 1.991-.192Zm-21.254.856c0 .107-.18.316-.401.466-.22.15-.401.062-.401-.194 0-.257.18-.467.401-.467.22 0 .401.088.401.195ZM79.604 5.255c-.394.701-1.029.13-.749-.673.155-.442.373-.526.63-.244.216.237.27.65.12.917Zm98.033-.63c0 .364-.265.662-.589.662-.358 0-.498-.259-.358-.661.127-.364.392-.661.589-.661.197 0 .358.297.358.66Zm4.182-.33a5.297 5.297 0 0 0-.662.771c-.171.252-.302.11-.305-.33-.004-.429.29-.771.662-.771.367 0 .505.148.305.33Zm-104.037.992c0 .242-.18.44-.4.44-.221 0-.402-.198-.402-.44 0-.243.18-.44.401-.44.22 0 .401.197.401.44Zm12.724-.175c-.133.146-.479.162-.768.035-.32-.14-.225-.245.242-.266.423-.02.66.085.526.231Zm97.558.649c0 .208-.271.265-.601.126-.331-.14-.602-.425-.602-.634 0-.208.271-.265.602-.126.33.14.601.425.601.634Zm8.422-.474c0 .242-.316.437-.702.434-.6-.006-.615-.07-.1-.434.756-.538.802-.538.802 0Zm-126.123.88c.137.243.057.441-.177.441a.434.434 0 0 1-.424-.44c0-.243.08-.44.177-.44.097 0 .288.197.424.44Zm104.868 0c0 .243-.191.441-.424.441-.234 0-.314-.198-.177-.44.136-.243.327-.44.424-.44.098 0 .177.197.177.44Zm10.008 1.078c.364.483.38.685.054.685-.254 0-.566-.297-.693-.66-.127-.364-.482-.662-.79-.662-.307 0-.558-.205-.558-.456 0-.57 1.249.117 1.987 1.093Zm-5.304-.811c-.133.146-.479.162-.768.035-.32-.14-.225-.245.242-.266.422-.02.659.085.526.23ZM62.41 7.784c-.523.573-.257 1.468.434 1.461.555-.005.586-.087.15-.392-.305-.211-.43-.605-.278-.874.303-.539.115-.659-.306-.196Zm132.363 1.293c-.133.146-.479.162-.769.035-.32-.14-.225-.245.243-.266.422-.02.659.085.526.231Zm1.312.615c0 .242-.181.44-.401.44-.221 0-.401-.198-.401-.44s.18-.44.401-.44c.22 0 .401.198.401.44Zm4.411.22c0 .364-.181.661-.401.661-.221 0-.401-.297-.401-.66 0-.364.18-.661.401-.661.22 0 .401.297.401.66Zm11.229.907c0 .378-.181.565-.401.415-.221-.15-.401-.459-.401-.687 0-.228.18-.414.401-.414.22 0 .401.309.401.687Zm14.837 3.94c0 .363-.27.66-.601.66-.331 0-.602-.297-.602-.66 0-.364.271-.661.602-.661.331 0 .601.297.601.66Zm13.901 3.854c-.111.303-.202.055-.202-.55 0-.606.091-.854.202-.551.111.303.111.799 0 1.101ZM51.515 23.79c-.136.242-.056.44.177.44a.434.434 0 0 0 .425-.44c0-.242-.08-.44-.177-.44-.098 0-.289.197-.425.44Zm-5.35 1.762c0 .606.09.854.202.55a1.855 1.855 0 0 0 0-1.1c-.111-.303-.202-.056-.202.55Zm-8.41.535c-.626.686-.61 1.354.025 1.101.276-.11.806.091 1.178.447.372.356.868.516 1.103.357.571-.388.543-1.118-.044-1.118-.258 0-.766-.295-1.128-.655-.508-.505-.768-.535-1.135-.132Zm-5.395 1.931c-.131.145-.143.54-.024.88.172.493-.14.561-1.58.345-1.141-.172-1.894-.091-2.07.222-.152.271-.086.492.148.492.233 0 .424.471.424 1.047 0 .822.215 1.046 1.003 1.046.706 0 1.002-.24 1.002-.81 0-.893 1.117-1.717 1.906-1.406.335.132.412-.058.232-.572-.184-.526-.12-.67.2-.452.259.175.47.13.47-.101 0-.23-.286-.54-.635-.687-.778-.328-.78-.328-1.075-.004Zm2.513.944c0 .813.74 1.082 1.5.546.569-.402.579-.456.052-.28-.359.122-.855-.002-1.102-.274-.333-.365-.45-.363-.45.008Zm-8.622 1.436c-.137.242-.057.44.176.44.234 0 .425.282.425.625 0 .904.926 1.108 1.455.32.341-.509.324-.816-.072-1.25-.622-.683-1.637-.753-1.985-.135Zm-2.707 1.185c-.387.11-.702.56-.702.996 0 .437-.305 1.067-.677 1.4-.589.526-.644.51-.426-.13.149-.438.017-.833-.326-.978-.317-.133-.576-.05-.576.184 0 .235-.271.427-.602.427-.33 0-.601.192-.601.427 0 .234-.253.32-.561.19-.896-.378-1.009.408-.19 1.332.662.748.75.762.75.11 0-.405.271-.737.602-.737.331 0 .602.31.602.691 0 1.157 1.73.573 2.049-.691.174-.693.292-.816.317-.33.045.86.65 1.027 1.064.291.148-.263.607-.382 1.02-.263.612.176.68.072.37-.565-.21-.429-.271-.9-.137-1.047.267-.294-.618-1.642-1.023-1.56-.139.029-.567.142-.953.253Zm2.506 1.458c-.514.365-.5.429.1.434.386.004.702-.191.702-.434 0-.537-.045-.537-.802 0Zm-10.505 3.292c-2.065 1.463-2.281 1.838-1.225 2.123.386.104.115.11-.601.01-1.35-.184-1.795.442-.657.922.41.173.571.593.439 1.148-.115.482-.045.876.155.876s.363-.397.363-.881c0-.96.296-1.08 1.168-.474.657.457 2.04-.33 2.04-1.16 0-.316.292-.438.702-.293.566.2.59.161.126-.2-.47-.367-.482-.574-.065-1.125.414-.548.41-.827-.026-1.478-.51-.763-.63-.737-2.42.532Zm-8.143 9.484c.139.246-.161.438-.678.434-.745-.005-.808-.09-.324-.434.746-.53.704-.53 1.002 0Zm234.199 11.455c.136.242-.044.44-.401.44-.357 0-.537-.198-.401-.44s.317-.44.401-.44c.084 0 .265.197.401.44Zm-6.88 4.645c-.13.374-.323.585-.428.47-.105-.116-.073-.422.073-.68.395-.703.626-.567.355.21Zm-1.203 2.643c-.13.374-.323.585-.428.47-.106-.115-.073-.422.073-.68.395-.703.626-.566.355.21Zm-9.362 1.523c0 .242-.191.44-.424.44-.234 0-.314-.198-.177-.44.136-.242.327-.44.424-.44.098 0 .177.198.177.44Zm1.404 0c.136.242-.034.44-.377.44-.344 0-.626-.198-.626-.44s.17-.44.378-.44c.207 0 .489.198.625.44Zm-26.668 8.81c0 .243-.181.441-.401.441-.221 0-.401-.198-.401-.44s.18-.44.401-.44c.22 0 .401.198.401.44Zm-155.063 4.01c.184.15.049.394-.3.541-.458.193-.636.005-.636-.672 0-.518.136-.762.3-.542.166.219.452.522.636.672Zm6.976.662c-.133.147-.48.163-.769.035-.32-.14-.224-.245.243-.266.422-.019.659.085.526.231Zm98.36 1.717c0 .38-.362.66-.851.66-.712 0-.769-.108-.352-.66.274-.364.657-.661.851-.661.193 0 .352.297.352.66Zm-43.913.22c.137.243-.044.44-.401.44-.357 0-.537-.197-.401-.44.137-.242.317-.44.401-.44.085 0 .265.198.401.44Zm-15.84.167c0 .09-.27.413-.602.714-.493.45-.601.42-.601-.166 0-.393.27-.715.601-.715.331 0 .602.075.602.167Zm26.468.027c0 .108-.181.317-.401.467-.221.15-.401.062-.401-.194 0-.257.18-.467.401-.467.22 0 .401.087.401.194Zm-17.813 1.128c.313 0 .569.396.569.88 0 .486-.104.882-.23.882-.46 0-1.177-1.124-1.263-1.983-.048-.484.012-.632.134-.33.122.303.478.55.79.55Zm-16.676.88c0 .569.203.881.502.772.276-.101.501-.448.501-.771s-.225-.67-.501-.771c-.299-.11-.502.203-.502.77Zm25.539.084c-.128.35-.223.246-.242-.267-.018-.464.077-.724.21-.578.133.147.148.527.032.845Zm1.13 1.239c.136.242-.034.44-.378.44-.343 0-.625-.198-.625-.44 0-.243.17-.441.377-.441.208 0 .489.198.626.44Z"
                  fill="#003D80"
                />
              </svg>
            </span>
            <span className="home-header__h1--span3">
              Before.<small>&nbsp;✨</small>
            </span>
          </h1>
          <h5 className="home-header__h5">
            Acoustic is a fast &amp; immersive music experience&nbsp;
            <br />
            built for Discord{' '}
          </h5>
          <div>
            <div className="hero-cta">
              <Link href="/invite">
                <a className="hero-main__icon">
                  <Image
                    src={invite}
                    alt="Invite Acoustic"
                    width={55}
                    height={55}
                  />
                </a>
              </Link>
              <Link href="/support">
                <a className="hero-main__icon">
                  <Image
                    src={discord}
                    alt="Join the community"
                    width={55}
                    height={55}
                  />
                </a>
              </Link>
              <a className="hero-main__text">Join us</a>
            </div>
          </div>
        </div>
        <div className="home-header__hero--right">
          <Image
            className="home-header__img"
            src={welcome}
            alt="acoustic phone mockup"
            width={706}
            height={868}
            loading="lazy"
          />
        </div>
      </div>
      <div className="home-header__bottom">
        <div className="home-header__box">
          <h2 className="home-header__h2">
            <span id="number1">0</span>k
          </h2>
          <p className="home-header__p">
            Active Users <br />
            since 2021
          </p>
        </div>
        <div className="home-header__box">
          <h2 className="home-header__h2">
            <span id="number2">0</span>k
          </h2>
          <p className="home-header__p">
            Total Songs <br />
            Played
          </p>
        </div>
        <div className="home-header__box">
          <h2 className="home-header__h2">
            <span id="number3">0</span>.0
          </h2>
          <p className="home-header__p">
            Average <br />
            Rating &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
          </p>
        </div>
        <div className="home-header__box">
          <h2 className="home-header__h2">
            <span id="number4">0</span>+
          </h2>
          <p className="home-header__p">
            Commands <br />
            Available
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
