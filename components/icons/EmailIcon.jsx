const FacebookIcon = ({ style = 'black' }) => (
  <svg
    width='30'
    height='24'
    viewBox='0 0 30 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M27.1875 0.75C28.7402 0.75 30 2.00918 30 3.5625C30 4.44727 29.584 5.2793 28.875 5.8125L16.125 15.375C15.457 15.873 14.543 15.873 13.875 15.375L1.125 5.8125C0.416777 5.2793 0 4.44727 0 3.5625C0 2.00918 1.25918 0.75 2.8125 0.75H27.1875ZM12.75 16.875C14.0859 17.877 15.9141 17.877 17.25 16.875L30 7.3125V19.5C30 21.5684 28.3184 23.25 26.25 23.25H3.75C1.67871 23.25 0 21.5684 0 19.5V7.3125L12.75 16.875Z'
      fill={style === 'black' ? '#000' : '#d9d9d9'}
    />
  </svg>
)

export default FacebookIcon
