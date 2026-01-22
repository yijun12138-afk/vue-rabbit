import request from '@/utils/http'

/**
 * 根据分类ID获取分类信息
 * @param {number|string} id - 分类ID
 * @returns {Promise} 返回一个Promise对象，包含分类信息
 */
export const getCategoryAPI = (id) => {  
  return request.get('/category', {
    params: {
      id
    }
  })
}

/**
 * 获取指定分类的筛选条件
 * @param {number|string} id 
 * @returns {Promise} 
 */
export const getCategoryFilterAPI = (id) => { 
  return request({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {  
  return request({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}