"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9266],{9266:function(e,t,n){n.r(t);var r=n(2791),a=n(184);t.default=function(e,t){(0,r.useEffect)((function(){var e=document.createElement("script");e.src="http://code.jquery.com/jquery-1.12.4.min.js";var t=document.createElement("script");return t.src="http://cdn.iamport.kr/js/iamport.payment-1.1.7.js",document.head.appendChild(e),document.head.appendChild(t),function(){document.head.removeChild(e),document.head.removeChild(t)}}),[]);var n=function(e){var t=e.success,n=e.error_msg;e.imp_uid,e.merchant_uid,e.pay_method,e.paid_amount,e.status;t?alert("\uacb0\uc81c\uc131\uacf5"):alert("\uacb0\uc81c \uc2e4\ud328 : ".concat(n))};return(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:function(){var e=window.IMP;e.init("imp56364406");var t={pg:"kakaopay",pay_method:"card",merchant_uid:"mid_".concat((new Date).getTime()),name:"\ud14c\uc2a4\ud2b8 \uc0c1\ud488",amount:10,buyer_email:"test@naver.com",buyer_name:"\ucf54\ub4dc\ucfe1",buyer_tel:"010-1234-5678",buyer_addr:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc",buyer_postcode:"123-456"};e.request_pay(t,n)},children:"\uacb0\uc81c\ud558\uae30"})})}}}]);
//# sourceMappingURL=9266.2a13fb2f.chunk.js.map