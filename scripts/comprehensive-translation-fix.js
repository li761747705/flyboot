const fs = require('fs')
const path = require('path')

// 全面修复中文语言文件中的空翻译键
function comprehensiveFix() {
  const zhFilePath = path.join(__dirname, '../src/i18n/locales/zh.js')
  
  // 读取中文语言文件
  const zhContent = fs.readFileSync(zhFilePath, 'utf8')
  
  // 提取对象内容
  const zhObjectMatch = zhContent.match(/export default\s+({[\s\S]*})/)
  
  if (!zhObjectMatch) {
    console.error('无法解析语言文件')
    return
  }
  
  let zhObject = JSON.parse(zhObjectMatch[1])
  
  // 定义需要添加的翻译内容
  const translationsToAdd = {
    // 支持页面翻译
    support: {
      pageTitle: "服务与支持",
      pageDescription: "随时响应，即刻启航未来",
      banners: {
        downloads: {
          title: "下载中心",
          subtitle: "驱动 / 固件 / 文档 / 工具一站式下载",
          actionText: "立即下载"
        },
        policy: {
          title: "售后服务政策",
          subtitle: "保修期、换货、维修及免责声明等服务政策",
          actionText: "查看详情"
        },
        faq: {
          title: "常见问题",
          subtitle: "连接、故障排查、电源、电子、导航、相机等常见问题",
          actionText: "查看更多"
        },
        hotline: {
          title: "服务热线",
          subtitle: "销售与技术支持联系信息，工作时间与地址",
          actionText: "立即联系"
        }
      },
      downloadDetail: {
        back: "返回下载中心",
        titles: {
          fpv: "穿越无人机下载",
          multiRotor: "多旋翼无人机下载",
          fixedWing: "固定翼无人机下载",
          helicopter: "无人直升机下载"
        },
        subtitles: {
          common: "相关文档与固件下载"
        },
        tabs: {
          docs: "文档",
          firmware: "固件"
        },
        tableHeaders: {
          name: "名称",
          version: "版本",
          date: "日期",
          format: "格式",
          download: "下载"
        }
      },
      downloadsPage: {
        title: "下载中心",
        subtitle: "驱动 / 固件 / 文档 / 工具一站式下载",
        cardLinkText: "进入下载"
      },
      faqPage: {
        title: "常见问题",
        subtitle: "连接、故障排查、电源、电子、导航、相机等常见问题"
      },
      policyPage: {
        title: "售后服务政策",
        subtitle: "保修期、换货、维修及免责声明等服务政策",
        tableHeaders: {
          type: "类型",
          detail: "详情",
          terminationConditions: "终止条件"
        },
        labels: {
          return: "退货",
          exchange: "换货",
          repair: "维修"
        },
        return: {
          detailTitle: "退货服务",
          detailItems: {
            item1: "产品自购买之日起7日内，出现非人为损坏的性能故障",
            item2: "产品包装完好，附件齐全，不影响二次销售"
          }
        },
        conditions: {
          items: {
            item1: "产品未经使用，外观完好",
            item2: "所有包装、附件、说明书齐全",
            item3: "购买凭证完整",
            item4: "非人为损坏",
            item5: "不影响二次销售",
            item6: "在7日内申请退货"
          }
        },
        exchange: {
          items: {
            item1: "产品自购买之日起15日内，出现性能故障",
            item2: "经检测确认非人为损坏",
            item3: "更换同型号同规格产品"
          }
        },
        repair: {
          title: "维修服务",
          items: {
            itemA: "产品保修期内，非人为损坏的故障",
            itemB: "免费维修或更换零部件",
            itemC: "保修期外，提供有偿维修服务",
            itemD: "维修周期不超过7个工作日"
          }
        }
      }
    },
    
    // 应用详情翻译
    applicationsDetail: {
      mapping: {
        title: "测绘应用",
        overviewDesc: "高效精准，重塑地理信息获取。快速获取大范围厘米级数据，大幅缩短工期，降低成本风险"
      },
      inspection: {
        title: "水利应用",
        overviewDesc: "智慧巡护，守护江河湖库安澜。高效覆盖险工险段，实时发现隐患，提升管理效能与安全"
      },
      delivery: {
        title: "应急应用",
        overviewDesc: "迅捷洞察，争分夺秒挽救生命。快速穿透复杂环境，实时回传灾情，为高效救援提供关键支持"
      },
      aerial: {
        title: "交通应用",
        overviewDesc: "立体巡查，保障路网畅通无阻。空中俯瞰路网设施，实时监测路况隐患，提升通行效率与安全"
      },
      spraying: {
        title: "环保应用",
        overviewDesc: "绿色守护，精准施策保护生态。高效覆盖作业区域，精准喷洒环保药剂，守护绿水青山"
      },
      agriculture: {
        title: "森林勘查应用",
        overviewDesc: "森林之眼，守护绿色生态屏障。全方位监测森林资源，及时发现火情隐患，保护森林生态安全"
      },
      powerline: {
        title: "电力巡检应用",
        overviewDesc: "智能巡检，保障电力线路安全。高效巡查电力设施，及时发现故障隐患，确保电网稳定运行"
      },
      farming: {
        title: "农业应用",
        overviewDesc: "智慧农业，精准作业提升效率。精准施肥施药，监测作物生长，提高农业生产效率"
      },
      integration: {
        title: "运载应用",
        overviewDesc: "智能运载，高效物流解决方案。大载重长航时，适应复杂环境，提供可靠运载服务"
      },
      energy: {
        title: "能源应用",
        overviewDesc: "能源巡检，保障设施安全运行。全方位监测能源设施，及时发现安全隐患，确保能源供应稳定"
      },
      defense: {
        title: "国防应用",
        overviewDesc: "国防利器，守护国家安全。高性能侦察监视，快速响应部署，为国防建设提供有力支撑"
      },
      marine: {
        title: "海洋应用",
        overviewDesc: "海洋之眼，探索蓝色国土。监测海洋环境，巡查海上设施，守护海洋权益"
      },
      surveying: {
        title: "测绘应用",
        overviewDesc: "精准测绘，构建数字地球。高精度地理信息采集，快速生成三维模型，助力智慧城市建设"
      },
      firefighting: {
        title: "消防应用",
        overviewDesc: "空中消防，快速响应火情。高空灭火作业，实时火情监测，为消防救援提供空中支援"
      },
      publicSafety: {
        title: "公共安全应用",
        overviewDesc: "安全守护，构建平安社会。全方位监控巡查，快速应急响应，保障公共安全"
      },
      common: {
        sectionTitle: "核心优势"
      }
    },
    
    // 关于页面翻译
    about: {
      responsibilityPage: {
        bannerAlt: "社会责任",
        title: "社会责任",
        subtitle: "履行企业责任，共创美好未来",
        summary: {
          title: "社会责任总结",
          subtitle: "持续创新，回馈社会"
        }
      },
      jobsPage: {
        bannerAlt: "招聘信息",
        title: "加入我们",
        subtitle: "与麒风智能一起成长",
        search: {
          labels: {
            category: "职位类别",
            search: "搜索"
          },
          options: {
            allCategories: "所有类别"
          },
          placeholders: {
            keyword: "请输入关键词"
          },
          buttons: {
            search: "搜索"
          }
        },
        tableHeaders: {
          title: "职位名称",
          type: "职位类型",
          salary: "薪资范围",
          date: "发布时间",
          action: "操作"
        },
        buttons: {
          viewDetail: "查看详情"
        },
        detail: {
          companyIntro: {
            title: "公司介绍",
            content: "麒风智能是一家专注于无人机技术研发与应用的高科技企业，致力于为全球客户提供优质的无人机产品和服务。"
          },
          duties: {
            title: "工作职责"
          },
          requirements: {
            title: "任职要求"
          },
          benefits: {
            title: "福利待遇",
            content: "五险一金、带薪年假、节日福利、定期团建、培训机会"
          },
          contact: {
            title: "联系方式",
            emailLabel: "简历投递邮箱："
          }
        },
        apply: {
          title: "申请职位",
          subtitle: "请填写以下信息",
          labels: {
            name: "姓名",
            phone: "电话",
            position: "申请职位",
            email: "邮箱",
            location: "工作地点"
          },
          placeholders: {
            name: "请输入您的姓名",
            phone: "请输入您的电话",
            position: "请输入申请职位",
            email: "请输入您的邮箱",
            location: "请选择工作地点"
          },
          options: {
            selectLocation: "请选择工作地点"
          },
          submit: "提交申请",
          alertFillAll: "请填写所有必填项"
        },
        email: {
          subject: "职位申请 - ",
          labels: {
            name: "姓名：",
            phone: "电话：",
            position: "申请职位：",
            email: "邮箱：",
            location: "工作地点："
          }
        }
      },
      contactPage: {
        bannerAlt: "联系我们",
        title: "联系我们",
        subtitle: "我们期待与您合作",
        address: {
          title: "公司地址",
          company: "麒风智能科技有限公司",
          detail: "中国北京市海淀区中关村创业大厦",
          phone: "电话：400-882-3882转1",
          email: "邮箱：contact@qifeng.ai"
        },
        qr: {
          title: "扫码关注",
          caption: "扫码关注我们的公众号"
        },
        form: {
          title: "在线留言",
          subtitle: "请留下您的信息，我们会尽快与您联系",
          labels: {
            name: "姓名",
            phone: "电话",
            email: "邮箱",
            message: "留言"
          },
          placeholders: {
            name: "请输入您的姓名",
            phone: "请输入您的电话",
            email: "请输入您的邮箱",
            message: "请输入您的留言"
          },
          submit: "提交留言",
          alertFillAll: "请填写所有必填项"
        },
        email: {
          subject: "联系我们 - ",
          labels: {
            name: "姓名：",
            phone: "电话：",
            email: "邮箱：",
            message: "留言："
          }
        }
      },
      companyPage: {
        bannerAlt: "公司介绍",
        intro: {
          p1: "麒风智能是一家专注于无人机技术研发与应用的高科技企业，致力于为全球客户提供优质的无人机产品和服务。",
          p2: "公司拥有一支高素质的研发团队，在无人机飞行控制、图像处理、数据传输等领域具有深厚的技术积累。",
          p3: "我们始终坚持技术创新，追求卓越品质，为客户创造更大价值。"
        },
        map: {
          title: "全球布局"
        },
        partnership: {
          intro: "麒风智能与全球多家知名企业建立战略合作关系，共同推动无人机技术的发展。",
          summary: "通过战略合作，我们为客户提供更优质的产品和服务。"
        }
      }
    }
  }
  
  // 递归合并翻译
  function mergeTranslations(target, source) {
    for (const key in source) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        if (!target[key] || typeof target[key] !== 'object') {
          target[key] = {}
        }
        mergeTranslations(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  
  // 合并翻译
  mergeTranslations(zhObject, translationsToAdd)
  
  // 写回文件
  const fixedContent = `export default ${JSON.stringify(zhObject, null, 2)}`
  fs.writeFileSync(zhFilePath, fixedContent, 'utf8')
  
  console.log('中文语言文件全面修复完成')
}

// 运行修复
comprehensiveFix()