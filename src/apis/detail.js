import request from '@/utils/http'

/**
 * 获取商品详情信息
 * @param {string|number} id - 商品ID
 * @returns {Promise} - 返回一个Promise对象，包含请求结果
 */
export const getDetail = (id)=>{  
    return request({
        url:'/goods',
        params:{
            id
        }
    })
}
/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}