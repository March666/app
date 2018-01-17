import { get, post } from '../utils/request'
import { host } from '../config/index'

export function fetchMinxinBridge (data, success) {
  post(`/api/${host.javaHost}/smtapp/minxinBridge/queryById.do`, data, success)
}

export function fetGovernmentAffairsById (data, success) {
  post(`/api/${host.javaHost}/smtapp/newsInfo/quaryGovDynamicDetail.do`, data, success)
}

export function fetGovernmentAffairsList (data, success) {
  post(`/api/${host.javaHost}/smtapp/newsInfo/quaryGovDynamic.do`, data, success)
}

export function fetGovernmentAffairsNewsList (data, success) {
  post(`/api/${host.javaHost}/smtapp/newsInfo/quaryNewsInfo.do`, data, success)
}

export function fetGovernmentNewsById (data, success) {
  post(`/api/${host.javaHost}/smtapp/newsInfo/quaryNewsDetail.do`, data, success)
}

export function fetchAnyGateData (params, success) {
  get(`/smt/data/anygate/${params.id}.json`, {}, success)
}

export function fetchIntroduction (params, success) {
  get(`/smt/data/employment/introduction.json`, {}, success)
}

export function fetchJobFair (params, success) {
  get(`/smt/data/employment/jobFair.json`, {}, success)
}

export function fetchDetails (params, success) {
  get(`/smt/data/employment/detail.json`, {}, success)
}

export function fetchMarket (params, success) {
  get(`/smt/data/employment/market.json`, {}, success)
}

export function fetchPortTips (params, success) {
  get(`/smt/data/port/tips.json`, {}, success)
}

export function fetchPortExchange (params, success) {
  get(`/smt/data/port/exchange.json`, {}, success)
}

export function fetchPortGuide (params, success) {
  get(`/smt/data/port/guide.json`, {}, success)
}

export function fetchPortCard (params, success) {
  get(`/smt/data/port/card.json`, {}, success)
}

export function fetchPortTraffic (params, success) {
  get(`/smt/data/port/traffic.json`, {}, success)
}

export function fetchScenic (params, success) {
  get(`/smt/data/recommend/scenic/${params.sid}.json`, {}, success)
}

export function fetchFood (params, success) {
  get(`/smt/data/recommend/food/${params.fid}.json`, {}, success)
}
