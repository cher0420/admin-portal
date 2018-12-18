
import fetch from '../config/fetch';
/**
 *  api异步请求
 */


/**
 *  21.分词
 */
export const participle  = params => fetch('/api/QuickQA/GetKeyWords' , params,"post");  //  将一句话分成多个词汇


/**
 *  28.	图片上传与图片删除接口
 */
export const UploadAndDeleteAsync = params => fetch('/api/KnowledgeQA/UploadAndDeleteAsync' , params,"post");  //  	图片上传与图片删除接口




