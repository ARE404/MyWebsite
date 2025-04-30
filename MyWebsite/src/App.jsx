import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">张程博 / Bob Zhang</h1>
          <div className="mt-4 text-gray-600">
            <p>邮箱: bobzhang8829@gmail.com</p>
            <p>电话: 17873169132(CN) / 0493943335(AU)</p>
            <p>地址: Sydney, Australia</p>
            <p>生日: 2001-06-16 (24)</p>
          </div>
        </header>

        {/* Self Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">自我评价</h2>
          <p className="text-gray-600">计算机入门，基础的前端知识, 能独立解决问题。</p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">教育经历</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-gray-700">中南大学 (长沙, 中国)</h3>
              <p className="text-gray-500">09/2019–06/2023</p>
              <p className="text-gray-600">测控技术与仪器专业工学学士</p>
              <p className="text-gray-600 mt-2">相关课程: 高级程序设计实践 (C++), 面向对象编程 (C++), 人工智能, 数字图像采集与处理, etc.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">新南威尔士大学 (悉尼, 澳大利亚)</h3>
              <p className="text-gray-500">02/2024–02/2026</p>
              <p className="text-gray-600">信息技术(Information Technology)硕士在读</p>
              <p className="text-gray-600 mt-2">相关课程: 数据库基础, 数据结构与算法, 计算机网络与应用, 前端开发, etc.</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">项目经历</h2>
          <div>
            <h3 className="text-xl font-medium text-gray-700">在线问答游戏（React, Vitest, Git, Unit Test)</h3>
            <p className="text-gray-500">02/2020–06/2023</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>协作完成了一个完整的前端开发项目，基于React.js独立搭建了一个单页应用（SPA），对接后端API实现用户注册登录、游戏管理、实时答题等核心功能。</li>
              <li>推动并落实代码规范与版本管理（Git），完成全程无错误Linting，提升团队协作效率。</li>
              <li>设计并执行组件测试与端到端测试（UI Testing），显著提升系统可靠性。</li>
            </ul>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">实习经历</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Smart Choice Professional（悉尼, 澳大利亚）</h3>
              <p className="text-gray-500">06/2024–09/2024</p>
              <p className="text-gray-600 font-medium">数据分析实习生</p>
              <p className="text-gray-600 mt-2">负责管理多个数据驱动的项目，致力于提升数据分析的准确性和效率。使用Python相关技术和Excel进行数据清洗和可视化，以及使用Numpy和Pandas进行统计分析。为客户提供直观的报告，帮助客户深入理解行业数据洞察，支持业务决策。</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">上海交通大学（上海, 中国）</h3>
              <p className="text-gray-500">12/2024–01/2025</p>
              <p className="text-gray-600 font-medium">国际暑校助教实习生</p>
              <p className="text-gray-600 mt-2">实习期间担任项目管理创新技术和数据处理要素两门课程的助教，主要负责考勤管理、解答同学疑问、协助老师准备课程材料、批改作业和试卷等。</p>
            </div>
          </div>
        </section>

        {/* Language Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">语言能力</h2>
          <p className="text-gray-600">英语六级, 雅思 7.5 分(听: 8, 读: 9)</p>
        </section>
      </div>
    </div>
  )
}

export default App
