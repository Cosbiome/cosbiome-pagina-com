interface ICardsInfoIMGProps {
  nbpr: number
  urlImage: string
}

const CardsInfoIMG = ({ nbpr, urlImage }: ICardsInfoIMGProps) => {
  return (
    <div className="row mt-5 mb-5">
      <div className={`col-md-6 col-sm-12 ${nbpr === 0 ? "" : "offset-md-6"}`}>
        <div style={{ maxWidth: "740px" }} className="card mb-3">
          <div className="row g-0">
            {nbpr === 0 && (
              <div style={{ maxWidth: 500 }} className="col-md-4">
                <img src={urlImage} alt="..." className="img-fluid" />
              </div>
            )}
            <div className="col-md-8 col-sm-12">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            {nbpr === 1 && (
              <div style={{ maxWidth: 500 }} className="col-md-4">
                <img src={urlImage} alt="..." className="img-fluid" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsInfoIMG
