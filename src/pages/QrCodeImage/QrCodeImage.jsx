function QrCodeImage({ data }) {
  return (
    <>
      <img
        style={{
          width: '70%'
        }}
        src={data}
      ></img>
    </>
  )
}

export default QrCodeImage
