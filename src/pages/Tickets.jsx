import '../style/Tickets.css';

function Tickets() {
  return (
    <div className="tickets-page container text-right">
      <h1 className="tickets-heading text-center">تذاكر بطولة العالم للبلياردو</h1>
      
      <div className="row ticket-options">
        <div className="col ticket-card">
          <div className="card">
            <h3 className="ticket-type">تذكرة دخول عامة</h3>
            <p className="ticket-price">١٠٠ ريال سعودي</p>
            <ul className="ticket-details">
              <li>الدخول لجميع المباريات</li>
              <li>مقاعد في المنطقة العامة</li>
              <li>برنامج الحدث مجانًا</li>
            </ul>
            <button className="btn btn-success">احجز الآن</button>
          </div>
        </div>
        
        <div className="col ticket-card">
          <div className="card">
            <h3 className="ticket-type">تذكرة كبار الشخصيات</h3>
            <p className="ticket-price">٢٥٠ ريال سعودي</p>
            <ul className="ticket-details">
              <li>مقاعد كبار الشخصيات</li>
              <li>لقاء خاص مع اللاعبين</li>
              <li>وجبات خفيفة ومشروبات مجانية</li>
            </ul>
            <button className="btn btn-success">احجز الآن</button>
          </div>
        </div>
        
        <div className="col ticket-card">
          <div className="card">
            <h3 className="ticket-type">تذكرة جماعية</h3>
            <p className="ticket-price">٤٠٠ ريال سعودي</p>
            <ul className="ticket-details">
              <li>دخول لأربعة أشخاص</li>
              <li>سعر مخفض</li>
              <li>ترتيب مقاعد جماعية</li>
            </ul>
            <button className="btn btn-success">احجز الآن</button>
          </div>
        </div>
      </div>

      <div className="text-center event-info">
        <p>تاريخ الحدث: ٣-٨ يونيو ٢٠٢٤</p>
        <p>الموقع: جدة، المملكة العربية السعودية</p>
      </div>
    </div>
  );
}

export default Tickets;
