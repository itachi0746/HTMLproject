import { Toast } from 'vant';

let loadingCount = 0;
let loading;

const startLoading = () => {
    loading = Toast.loading({
        duration: 0,
        message: '加载中...',
        // mask: true,
        forbidClick: true, // 禁用背景点击
    });
}

const endLoading = () => {
    loading.clear();
};

export const showLoading = () => {
    if (loadingCount === 0) {
        startLoading();
    }
    loadingCount += 1;
};

export const hideLoading = () => {
    if (loadingCount <= 0) {
        return;
    }
    loadingCount -= 1;
    if (loadingCount === 0) {
        endLoading();
    }
};

export const msg = (message) => {
    Toast({
        duration: 2000,
        message: message,
        // mask: true,
        forbidClick: true, // 禁用背景点击
    });
};
export const success = (message='操作成功') => {
    Toast.success({
        duration: 2000,
        message: message,
        // mask: true,
        forbidClick: true, // 禁用背景点击
    });
};
export const fail = (message='操作失败') => {
    Toast.fail({
        duration: 2000,
        message: message,
        // mask: true,
        forbidClick: true, // 禁用背景点击
    });
};
