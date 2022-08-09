import React from "react";
import Navbar from "./navbar";

const Agreement = () => {
  return (
    <>
      <Navbar />
      <div className="agreementContainer">
        <h1>개인정보 수집∙이용동의서</h1>
        <p>
          팀 MMM은 『개인정보보호법』에 의거하여, 아래와 같은 내용으로
          개인정보를 수집하고 있습 니다. 귀하께서는 아래 내용을 자세히
          읽어보시고, 모든 내용을 이해하신 후에 동의 여부를 결정해주 시기
          바랍니다.
        </p>
        <h2>Ⅰ. 개인정보의 수집 및 이용 동의서</h2>
        <h3>1. 개인정보 수집 항목 및 수집∙이용 목적</h3>
        <h4>① 수집항목(필수 항목)</h4>
        <h5>- 성명(국문), 이메일 외 마이페이지에 사용자가 제공한 정보</h5>
        <h5>- 사용자가 설문 조사 시 제공한 정보</h5>
        <h4>② 수집 및 이용 목적</h4>
        <h5>- Survave 설문 조사 결과 확인 시 정보 제공</h5>
        <h5>- Survave 서비스 제공</h5>
        <h5>- Survave 마케팅 및 홍보</h5>
        <h5>- 정보주체에게 연락 수단으로서 활용</h5>
        <h3>2. 개인정보 보유 및 이용기간</h3>
        <h5>- 수집∙이용 동의일로부터 회원 탈퇴 시 때까지</h5>
        <h3>3. 동의거부 권리</h3>
        <h5>
          - 귀하는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부할
          권리가 있습니다. 단, Survave 서비스 이용에 제한 또는 불이익이 발생할
          수 있음을 알려 드립니다.
        </h5>
        <h2>Ⅱ. 개인정보의 제3자 제공 동의서</h2>
        <h3>4. 개인정보를 제공받는 자</h3>
        <h4>‐ Survave의 2차 창작물 서비스 이용자</h4>
        <h4>‐ Survave의 2차 가공물 서비스 이용자</h4>
        <h3>5. 개인정보의 제3자 제공 수집 항목 및 수집∙이용 목적</h3>
        <h4>③ 수집항목(필수 항목)</h4>
        <h5>- 사용자가 설문 조사 시 제공한 정보</h5>
        <h4>④ 수집 및 이용 목적</h4>
        <h5>- Survave 2차 창작물 창작 후 서비스 제공</h5>
        <h5>- Survave 2차 가공물 생성 후 서비스 제공</h5>
        <h3>6. 개인정보 보유 및 이용기간</h3>
        <h5>
          - 수집∙이용 동의일로부터 개인정보의 수집∙이용 목적을 달성할 때까지
        </h5>
        <h3>7. 동의거부 권리</h3>
        <h5>
          ‐ 귀하는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부할
          권리가 있습니다. 단, Survave 서비스 이용에 제한 또는 불이익이 발생할
          수 있음을 알려 드립니다.
        </h5>
        <div className="finalAgreement">
          본인은 위 동의서 내용을 충분히 숙지하였으며, 개인정보 수집, 이용,
          제공하는 것에 동의합니다.
        </div>
      </div>
    </>
  );
};

export default Agreement;
