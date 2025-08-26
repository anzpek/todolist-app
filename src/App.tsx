import React from "react"
import "./App.css"

function App() {
  return (
    <div className="app-container safe-area">
      {/* 헤더 */}
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          📱 TodoList App
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
            <span className="text-sm">➕</span>
          </button>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 overflow-y-auto custom-scrollbar p-4">
        <div className="space-y-4">
          {/* 환영 메시지 */}
          <div className="text-center py-8">
            <div className="text-6xl mb-4">📱</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              TodoList App
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              모바일 최적화된 할일 관리 앱
            </p>
            
            {/* 기능 카드들 */}
            <div className="grid gap-4 max-w-sm mx-auto">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  할일 관리
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  체크리스트와 프로젝트 관리
                </p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-2xl mb-2">📅</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  캘린더 뷰
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  주간/월간 일정 관리
                </p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-2xl mb-2">🔄</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  실시간 동기화
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  클라우드 백업 지원
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <nav className="flex items-center justify-around p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <button className="flex flex-col items-center gap-1 p-2 text-primary-600 dark:text-primary-400">
          <span className="text-lg">📋</span>
          <span className="text-xs font-medium">오늘</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-gray-400">
          <span className="text-lg">📅</span>
          <span className="text-xs font-medium">주간</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-gray-400">
          <span className="text-lg">📊</span>
          <span className="text-xs font-medium">월간</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-gray-400">
          <span className="text-lg">⚙️</span>
          <span className="text-xs font-medium">설정</span>
        </button>
      </nav>
    </div>
  )
}

export default App
