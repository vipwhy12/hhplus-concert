import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 100, // 동시 사용자 수
  duration: '10s', // 테스트 실행 시간
};

export default function () {
  const url = 'http://localhost:3000/concerts/1/sessions/1';

  // GET 요청 실행
  const res = http.get(url);

  // 응답 상태 코드 확인
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // 응답 데이터 로깅 (옵션)
  console.log(`Response time: ${res}`);

  // 잠시 대기
  sleep(1);
}
