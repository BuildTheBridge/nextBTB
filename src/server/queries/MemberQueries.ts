export const SELECT_MEMBER = `SELECT A.MB_NO, A.MB_NM, A.MB_TELNO, A.MB_EML_ADDR, A.MB_ID, A.MB_TYPE, A.MB_USE_YN, A.MB_REG_DT FROM BTB_MEMBER A`;

export const CHECK_AVAILABLE_MEMBER = `select * from BTB_MEMBER where MB_EML_ADDR = ?`;
