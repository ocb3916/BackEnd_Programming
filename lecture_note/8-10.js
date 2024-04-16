const error = new Error('메시지');
error.name = '내 맘대로 에러';
error.message = '오류의 메시지';

throw error;