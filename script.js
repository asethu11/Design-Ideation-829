class AIProjectInterface {
    constructor() {
        this.initializeElements();
        this.initializeEventListeners();
        this.updateCharacterCounters();
        this.initializeChatbot();
        this.initializePromptTemplates();
    }
    
    initializeElements() {
        // Form inputs
        this.projectSubtitleInput = document.querySelector('.form-input[placeholder="Enter project subtitle"]');
        this.modelSelect = document.querySelector('#modelSelect');
        
        // Character counters
        this.projectSubtitleCounter = document.querySelector('.char-counter');
        
        // Navigation
        this.navItems = document.querySelectorAll('.nav-item');
        
        // Preview elements
        this.editViewBtn = document.querySelector('.edit-view-btn');
        this.fullscreenBtn = document.querySelector('.fullscreen-btn');
        
        // User avatar
        this.userAvatar = document.querySelector('.user-avatar');
        
        // Breadcrumb
        this.breadcrumbLink = document.querySelector('.breadcrumb-link');
        this.breadcrumbTitle = document.querySelector('.editable-title');
        
        // Chat memory toggle
        this.chatMemoryToggle = document.querySelector('#chatMemoryToggle');
        
        // Knowledge base toggle
        this.knowledgeBaseToggle = document.querySelector('#knowledgeBaseToggle');
        
        // Profile button
        this.profileBtn = document.querySelector('.profile-btn');
        
        // Chatbot elements
        this.chatInput = document.querySelector('#chatInput');
        this.chatSendBtn = document.querySelector('#chatSendBtn');
        this.chatMessages = document.querySelector('#chatMessages');
        
        // New prompt engineering elements
        this.systemInstructionsInput = document.querySelector('#systemInstructionsInput');
        // Prompt pills
        this.promptPills = document.querySelectorAll('.prompt-pill');
        this.browseGalleryBtn = document.querySelector('#browseGallery');
        this.helpWriteBtn = document.querySelector('#helpWriteBtn');
        this.tokenCounter = document.querySelector('#tokenCount');
        this.compareBtn = document.querySelector('#compareBtn');
        this.saveBtn = document.querySelector('#saveBtn');
        this.clearBtn = document.querySelector('#clearBtn');
        
        // Plan Mode elements
        this.planModeToggle = document.querySelector('#planModeToggle');
        this.planModeSidebar = document.querySelector('#planModeSidebar');
        this.closePlanSidebar = document.querySelector('#closePlanSidebar');
        this.roleButtons = document.querySelectorAll('.role-btn');
        this.customRoleContainer = document.querySelector('#customRoleContainer');
        this.customRoleInput = document.querySelector('#customRoleInput');
        this.customRoleApply = document.querySelector('#customRoleApply');
        this.customRoleCancel = document.querySelector('#customRoleCancel');
        this.previewAiBtn = document.querySelector('#previewAiBtn');
        
        // Plan Mode form elements
        this.planModelSelect = document.querySelector('#planModelSelect');
        this.modelInfoCard = document.querySelector('#modelInfoCard');
        this.planGoalSelect = document.querySelector('#planGoalSelect');
        this.planGoalCustom = document.querySelector('#planGoalCustom');
        this.planContextInput = document.querySelector('#planContextInput');
        this.planToneBtns = document.querySelectorAll('.plan-tone-btn');
        this.planFormatBtns = document.querySelectorAll('.plan-format-btn');
        this.planApplyBtn = document.querySelector('#planApplyBtn');
        this.planResetBtn = document.querySelector('#planResetBtn');
        
        // Plan Mode state
        this.planModeState = {
            model: 'gpt-4o-mini',
            goal: '',
            context: '',
            tone: '',
            format: '',
            role: '',
            customRoleText: ''
        };
        
        // Model information
        this.modelInfo = {
            'gpt-4o-mini': {
                title: 'GPT-4o Mini',
                description: 'Fast and efficient for most everyday tasks. Great balance of speed and quality.',
                stats: ['⚡ Speed: Fast', '💰 Cost: Low', '🧠 Capability: Good']
            },
            'gpt-4': {
                title: 'GPT-4',
                description: 'Most capable model with advanced reasoning. Best for complex analysis and creative tasks.',
                stats: ['⚡ Speed: Slower', '💰 Cost: High', '🧠 Capability: Excellent']
            },
            'gpt-3.5-turbo': {
                title: 'GPT-3.5 Turbo',
                description: 'Balanced performance with good speed. Reliable for most general-purpose tasks.',
                stats: ['⚡ Speed: Fast', '💰 Cost: Medium', '🧠 Capability: Good']
            },
            'claude-3': {
                title: 'Claude 3',
                description: 'Excellent for detailed analysis, writing, and research tasks. Strong at following instructions.',
                stats: ['⚡ Speed: Medium', '💰 Cost: Medium', '🧠 Capability: Excellent']
            }
        };
        
        // Resize elements
        this.resizeHandle = document.querySelector('#resizeHandle');
        this.formsPane = document.querySelector('.forms-pane');
        this.contentArea = document.querySelector('.content-area');
        
        // Prompt templates data
        this.promptTemplates = {
            document: {
                title: "Document Classification",
                prompt: "Please classify this document into one of the following categories: [List your categories here]\n\nDocument content: [Paste your document here]\n\nPlease provide:\n1. The most appropriate category\n2. Confidence level (1-10)\n3. Brief explanation for your classification"
            },
            image: {
                title: "Image Editing Request",
                prompt: "I need help editing an image. Please provide specific instructions for:\n\n1. What changes you want to make\n2. The style or effect you're aiming for\n3. Any technical requirements\n\nExample: 'Please enhance the lighting in this photo of croissants, make them look more golden and appetizing, and blur the background slightly for a professional food photography look.'"
            },
            question: {
                title: "Visual Question Answering",
                prompt: "Please analyze this image and answer the following questions with detailed, knowledge-based responses:\n\n[Your questions about the image here]\n\nProvide comprehensive answers that demonstrate understanding of:\n- Visual elements in the image\n- Relevant background knowledge\n- Context and implications"
            }
        };
        
        // Role definitions
        this.roleDefinitions = {
            designer: "You are an experienced UX/UI designer with expertise in user-centered design, accessibility, and modern design systems. You think systematically about user needs and business goals.",
            teacher: "You are a patient and knowledgeable educator who excels at breaking down complex topics into understandable concepts. You use examples, analogies, and progressive learning techniques.",
            analyst: "You are a detail-oriented data analyst with strong critical thinking skills. You approach problems methodically, consider multiple perspectives, and provide evidence-based insights.",
            storyteller: "You are a creative storyteller who understands narrative structure, character development, and engaging communication. You make information memorable through compelling narratives.",
            coach: "You are a supportive coach who helps people achieve their goals through encouragement, accountability, and practical guidance. You ask thoughtful questions and provide actionable advice.",
            consultant: "You are a strategic business consultant with broad expertise across industries. You provide practical, results-oriented advice and help clients solve complex challenges.",
            researcher: "You are a thorough researcher who excels at gathering, analyzing, and synthesizing information from multiple sources. You approach topics with curiosity and academic rigor.",
            writer: "You are a skilled writer with expertise in various forms of communication. You understand audience, tone, structure, and the craft of clear, engaging prose."
        };
    }
    
    initializeEventListeners() {
        // Form input changes
        if (this.projectSubtitleInput) {
            this.projectSubtitleInput.addEventListener('input', () => {
                this.updateCharacterCounter(this.projectSubtitleInput, this.projectSubtitleCounter, 240);
                this.updatePreview();
            });
        }
        if (this.systemInstructionsInput) {
            this.systemInstructionsInput.addEventListener('input', () => {
                this.autoResizeSystemInput();
                this.updatePreview();
            });
        }
        if (this.modelSelect) {
            this.modelSelect.addEventListener('change', () => {
                this.updatePreview();
            });
        }
        // Navigation
        if (this.navItems) {
            this.navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleNavigationClick(item);
                });
            });
        }
        // Preview controls
        if (this.editViewBtn) this.editViewBtn.addEventListener('click', () => this.handleEditView());
        if (this.fullscreenBtn) this.fullscreenBtn.addEventListener('click', () => this.handleFullscreen());
        // User interactions
        if (this.userAvatar) this.userAvatar.addEventListener('click', () => this.handleUserAvatarClick());
        if (this.breadcrumbLink) this.breadcrumbLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleBreadcrumbClick();
        });
        // Editable breadcrumb title events
        if (this.breadcrumbTitle) {
            this.breadcrumbTitle.addEventListener('blur', () => {
                this.syncBreadcrumbToInput();
            });
            this.breadcrumbTitle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.breadcrumbTitle.blur();
                }
                if (e.key === 'Escape') {
                    e.preventDefault();
                    // Restore to current input value
                    this.updateBreadcrumbTitle();
                    this.breadcrumbTitle.blur();
                }
            });
            this.breadcrumbTitle.addEventListener('input', () => {
                // Update preview when breadcrumb changes
                this.updatePreview();
            });
        }
        if (this.chatMemoryToggle) this.chatMemoryToggle.addEventListener('change', () => {
            this.handleMemoryToggleChange();
            this.updatePreview();
        });
        if (this.knowledgeBaseToggle) this.knowledgeBaseToggle.addEventListener('change', () => {
            this.handleKnowledgeBaseToggleChange();
            this.updatePreview();
        });
        if (this.profileBtn) this.profileBtn.addEventListener('click', () => this.handleProfileClick());
        // Chatbot event listeners
        if (this.chatSendBtn) this.chatSendBtn.addEventListener('click', () => this.sendMessage());
        if (this.chatInput) {
            this.chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
            this.chatInput.addEventListener('input', () => {
                this.autoResizeChatInput();
                this.updateTokenCount();
            });
        }
        // Prompt pill event listeners
        if (this.promptPills) {
            this.promptPills.forEach(pill => {
                pill.addEventListener('click', () => this.handlePromptPillClick(pill));
            });
        }
        if (this.browseGalleryBtn) this.browseGalleryBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleBrowseGallery();
        });
        if (this.helpWriteBtn) this.helpWriteBtn.addEventListener('click', () => this.handleHelpMeWrite());
        if (this.compareBtn) this.compareBtn.addEventListener('click', () => this.handleCompare());
        if (this.saveBtn) this.saveBtn.addEventListener('click', () => this.handleSave());
        if (this.clearBtn) this.clearBtn.addEventListener('click', () => this.handleClear());
        
        // Plan Mode event listeners
        if (this.planModeToggle) this.planModeToggle.addEventListener('change', () => this.handlePlanModeToggle());
        if (this.closePlanSidebar) this.closePlanSidebar.addEventListener('click', () => this.closePlanMode());
        // Role button listeners
        this.roleButtons.forEach(btn => {
            btn.addEventListener('click', () => this.handleRoleButtonClick(btn));
        });
        
        // Custom role listeners
        if (this.customRoleApply) this.customRoleApply.addEventListener('click', () => this.applyCustomRole());
        if (this.customRoleCancel) this.customRoleCancel.addEventListener('click', () => this.cancelCustomRole());
        if (this.customRoleInput) {
            this.customRoleInput.addEventListener('input', () => this.updateCustomRoleApplyButton());
            // Enable apply on Enter key
            this.customRoleInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && e.ctrlKey) {
                    e.preventDefault();
                    this.applyCustomRole();
                }
            });
        }
        
        if (this.previewAiBtn) this.previewAiBtn.addEventListener('click', () => this.handlePreviewAI());
        
        // Plan Mode form listeners
        if (this.planModelSelect) this.planModelSelect.addEventListener('change', () => this.handlePlanModelChange());
        if (this.planGoalSelect) this.planGoalSelect.addEventListener('change', () => this.handlePlanGoalChange());
        if (this.planGoalCustom) this.planGoalCustom.addEventListener('input', () => this.updatePlanPreview());
        if (this.planContextInput) this.planContextInput.addEventListener('input', () => this.updatePlanPreview());
        if (this.planApplyBtn) this.planApplyBtn.addEventListener('click', () => this.applyPlanToSystemInstructions());
        if (this.planResetBtn) this.planResetBtn.addEventListener('click', () => this.resetPlanMode());
        
        // Plan Mode button listeners
        this.planToneBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleToneSelection(btn));
        });
        this.planFormatBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleFormatSelection(btn));
        });
        
        // Focus management
        if (this.projectSubtitleInput) this.projectSubtitleInput.focus();
        
        // Resize functionality
        if (this.resizeHandle) {
            this.resizeHandle.addEventListener('mousedown', (e) => this.startResize(e));
        }
    }
    
    initializeChatbot() {
        this.autoResizeChatInput();
        this.updateTokenCount();
        this.autoResizeSystemInput();
        
        // Initialize model info card
        if (this.modelInfoCard && this.planModelSelect) {
            this.updateModelInfoCard(this.planModelSelect.value);
        }
    }
    
    initializePromptTemplates() {
        // Initialize templates without adding welcome message
    }
    

    
    autoResizeSystemInput() {
        this.systemInstructionsInput.style.height = 'auto';
        this.systemInstructionsInput.style.height = Math.max(
            this.systemInstructionsInput.scrollHeight, 
            60
        ) + 'px';
    }
    
    updateTokenCount() {
        const text = this.chatInput.value;
        // Simple token estimation (roughly 4 characters per token)
        const estimatedTokens = Math.ceil(text.length / 4);
        this.tokenCounter.textContent = `${estimatedTokens} token${estimatedTokens !== 1 ? 's' : ''}`;
    }
    
    handlePromptPillClick(pill) {
        const category = pill.dataset.category;
        const template = this.promptTemplates[category];
        if (template) {
            this.chatInput.value = template.prompt;
            this.autoResizeChatInput();
            this.updateTokenCount();
            this.chatInput.focus();
            
            // Save to recent prompts
            this.saveRecentPrompt(template.prompt, template.title);
            
            this.showTemplateFeedback(template.title);
        }
    }
    
    showTemplateFeedback(templateTitle) {
        const feedback = document.createElement('div');
        feedback.textContent = `${templateTitle} template loaded!`;
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-600);
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (document.body.contains(feedback)) {
                    document.body.removeChild(feedback);
                }
            }, 300);
        }, 2000);
    }
    
    // Plan Mode Methods
    handlePlanModeToggle() {
        if (this.planModeToggle.checked) {
            this.openPlanMode();
        } else {
            this.closePlanMode();
        }
    }
    
    openPlanMode() {
        this.planModeSidebar.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    
    closePlanMode() {
        this.planModeSidebar.classList.remove('open');
        this.planModeToggle.checked = false;
        document.body.style.overflow = '';
    }
    
    handleRoleButtonClick(clickedBtn) {
        const selectedRole = clickedBtn.dataset.role;
        
        // Handle custom role button
        if (selectedRole === 'custom') {
            this.showCustomRoleInput();
            return;
        }
        
        // Hide custom role input if visible
        this.hideCustomRoleInput();
        
        // Remove selected class from all role buttons
        this.roleButtons.forEach(btn => btn.classList.remove('selected'));
        
        // If clicking the same button, deselect it
        if (this.planModeState.role === selectedRole) {
            this.planModeState.role = '';
            this.updateSystemInstructionsFromRole();
            return;
        }
        
        // Add selected class to clicked button
        clickedBtn.classList.add('selected');
        this.planModeState.role = selectedRole;
        
        // Update system instructions immediately
        this.updateSystemInstructionsFromRole();
    }
    
    updateSystemInstructionsFromRole() {
        if (this.planModeState.role && this.roleDefinitions[this.planModeState.role]) {
            const roleInstruction = this.roleDefinitions[this.planModeState.role];
            this.systemInstructionsInput.value = roleInstruction;
            this.autoResizeSystemInput();
            this.showActionFeedback(`${this.planModeState.role} role applied!`, '#10b981');
        } else if (this.planModeState.role === 'custom' && this.planModeState.customRoleText) {
            // Apply custom role
            this.systemInstructionsInput.value = this.planModeState.customRoleText;
            this.autoResizeSystemInput();
            this.showActionFeedback('Custom role applied!', '#10b981');
        } else {
            // If no role selected, clear or keep existing content
            this.showActionFeedback('Role cleared', '#f59e0b');
        }
    }
    
    showCustomRoleInput() {
        // Remove selected class from all other role buttons
        this.roleButtons.forEach(btn => {
            if (btn.dataset.role !== 'custom') {
                btn.classList.remove('selected');
            }
        });
        
        // Show custom role input
        this.customRoleContainer.style.display = 'block';
        
        // Focus on the input
        setTimeout(() => {
            this.customRoleInput.focus();
        }, 100);
        
        // Update apply button state
        this.updateCustomRoleApplyButton();
    }
    
    hideCustomRoleInput() {
        this.customRoleContainer.style.display = 'none';
        this.customRoleInput.value = '';
        
        // Remove selected class from custom button
        const customBtn = document.querySelector('.role-btn[data-role="custom"]');
        if (customBtn) {
            customBtn.classList.remove('selected');
        }
    }
    
    updateCustomRoleApplyButton() {
        const hasContent = this.customRoleInput.value.trim().length > 0;
        this.customRoleApply.disabled = !hasContent;
    }
    
    applyCustomRole() {
        const customRoleText = this.customRoleInput.value.trim();
        
        if (!customRoleText) {
            this.showActionFeedback('Please enter a custom role description', '#f59e0b');
            return;
        }
        
        // Save custom role to state
        this.planModeState.role = 'custom';
        this.planModeState.customRoleText = customRoleText;
        
        // Mark custom button as selected
        const customBtn = document.querySelector('.role-btn[data-role="custom"]');
        if (customBtn) {
            customBtn.classList.add('selected');
        }
        
        // Apply to system instructions
        this.updateSystemInstructionsFromRole();
        
        // Hide the input
        this.hideCustomRoleInput();
        
        // Save custom role for future use
        this.saveCustomRoleToHistory(customRoleText);
    }
    
    cancelCustomRole() {
        this.hideCustomRoleInput();
        
        // If there was a previously selected role, restore it
        if (this.planModeState.role && this.planModeState.role !== 'custom') {
            const roleBtn = document.querySelector(`[data-role="${this.planModeState.role}"]`);
            if (roleBtn) {
                roleBtn.classList.add('selected');
            }
        }
    }
    
    saveCustomRoleToHistory(roleText) {
        const CUSTOM_ROLES_KEY = 'customRoles';
        let customRoles = JSON.parse(localStorage.getItem(CUSTOM_ROLES_KEY)) || [];
        
        // Remove existing entry if it exists
        customRoles = customRoles.filter(role => role !== roleText);
        
        // Add new entry at the beginning
        customRoles.unshift(roleText);
        
        // Keep only the last 5 custom roles
        if (customRoles.length > 5) {
            customRoles = customRoles.slice(0, 5);
        }
        
        localStorage.setItem(CUSTOM_ROLES_KEY, JSON.stringify(customRoles));
    }
    
    getCustomRoleHistory() {
        const CUSTOM_ROLES_KEY = 'customRoles';
        return JSON.parse(localStorage.getItem(CUSTOM_ROLES_KEY)) || [];
    }
    
    handlePlanModelChange() {
        const selectedModel = this.planModelSelect.value;
        this.planModeState.model = selectedModel;
        this.updateModelInfoCard(selectedModel);
        
        // Also update the main model select if it exists
        if (this.modelSelect) {
            this.modelSelect.value = selectedModel;
        }
        
        this.updatePlanPreview();
    }
    
    updateModelInfoCard(modelKey) {
        const modelData = this.modelInfo[modelKey];
        if (!modelData || !this.modelInfoCard) return;
        
        const titleElement = this.modelInfoCard.querySelector('.model-info-title');
        const descElement = this.modelInfoCard.querySelector('.model-info-description');
        const statsContainer = this.modelInfoCard.querySelector('.model-info-stats');
        
        if (titleElement) titleElement.textContent = modelData.title;
        if (descElement) descElement.textContent = modelData.description;
        if (statsContainer) {
            statsContainer.innerHTML = modelData.stats.map(stat => 
                `<span class="model-stat">${stat}</span>`
            ).join('');
        }
    }
    
    handlePlanGoalChange() {
        const selectedGoal = this.planGoalSelect.value;
        if (selectedGoal === 'custom') {
            this.planGoalCustom.style.display = 'block';
            this.planGoalCustom.focus();
        } else {
            this.planGoalCustom.style.display = 'none';
            this.planModeState.goal = selectedGoal;
            this.updatePlanPreview();
        }
    }
    
    handleToneSelection(btn) {
        // Remove selected class from all tone buttons
        this.planToneBtns.forEach(b => b.classList.remove('selected'));
        // Add selected class to clicked button
        btn.classList.add('selected');
        this.planModeState.tone = btn.dataset.tone;
        this.updatePlanPreview();
    }
    
    handleFormatSelection(btn) {
        // Remove selected class from all format buttons
        this.planFormatBtns.forEach(b => b.classList.remove('selected'));
        // Add selected class to clicked button
        btn.classList.add('selected');
        this.planModeState.format = btn.dataset.format;
        this.updatePlanPreview();
    }
    
    updatePlanPreview() {
        const prompt = this.generatePromptFromPlan();
        if (prompt.trim()) {
            this.systemInstructionsInput.value = prompt;
            this.autoResizeSystemInput();
        }
    }
    
    generatePromptFromPlan() {
        let prompt = '';
        
        // Add role if selected
        if (this.planModeState.role && this.roleDefinitions[this.planModeState.role]) {
            prompt += this.roleDefinitions[this.planModeState.role] + '\n\n';
        }
        
        // Add goal
        let goal = this.planModeState.goal;
        if (this.planGoalSelect.value === 'custom' && this.planGoalCustom.value.trim()) {
            goal = this.planGoalCustom.value.trim();
        } else if (this.planModeState.goal) {
            const goalTexts = {
                brainstorm: 'help brainstorm creative ideas',
                analyze: 'analyze and provide insights',
                write: 'help with writing tasks',
                explain: 'explain concepts clearly',
                solve: 'help solve problems',
                create: 'help create content',
                review: 'review and provide feedback'
            };
            goal = goalTexts[this.planModeState.goal] || this.planModeState.goal;
        }
        
        if (goal) {
            prompt += `Your primary goal is to ${goal}.`;
        }
        
        // Add context if provided
        if (this.planContextInput.value.trim()) {
            prompt += `\n\nContext: ${this.planContextInput.value.trim()}`;
        }
        
        // Add tone and style
        if (this.planModeState.tone) {
            const toneInstructions = {
                professional: 'Maintain a professional and formal tone.',
                casual: 'Use a casual, conversational tone.',
                friendly: 'Be warm, friendly, and approachable.',
                detailed: 'Provide comprehensive, detailed responses.',
                concise: 'Keep responses concise and to the point.',
                creative: 'Be creative and think outside the box.',
                'step-by-step': 'Break down information into clear, sequential steps.'
            };
            
            if (toneInstructions[this.planModeState.tone]) {
                prompt += `\n\n${toneInstructions[this.planModeState.tone]}`;
            }
        }
        
        // Add output format
        if (this.planModeState.format) {
            const formatInstructions = {
                bullets: 'Format your response using bullet points for clarity.',
                numbered: 'Use a numbered list format for your response.',
                essay: 'Provide your response in essay format with clear paragraphs.',
                table: 'Present information in a table format when appropriate.',
                code: 'Include code examples and technical details as needed.',
                outline: 'Structure your response as a detailed outline.',
                qa: 'Format your response as questions and answers.'
            };
            
            if (formatInstructions[this.planModeState.format]) {
                prompt += `\n\n${formatInstructions[this.planModeState.format]}`;
            }
        }
        
        return prompt.trim();
    }
    
    applyPlanToSystemInstructions() {
        const prompt = this.generatePromptFromPlan();
        if (prompt.trim()) {
            this.systemInstructionsInput.value = prompt;
            this.autoResizeSystemInput();
            this.closePlanMode();
            this.showActionFeedback('Plan applied to System Instructions!', '#10b981');
        }
    }
    
    resetPlanMode() {
        // Reset state
        this.planModeState = {
            model: 'gpt-4o-mini',
            goal: '',
            context: '',
            tone: '',
            format: '',
            role: '',
            customRoleText: ''
        };
        
        // Reset form elements
        this.planModelSelect.value = 'gpt-4o-mini';
        this.updateModelInfoCard('gpt-4o-mini');
        this.planGoalSelect.value = '';
        this.planGoalCustom.value = '';
        this.planGoalCustom.style.display = 'none';
        this.planContextInput.value = '';
        
        // Clear role button selection
        this.roleButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Hide custom role input
        this.hideCustomRoleInput();
        
        // Remove selected classes
        this.planToneBtns.forEach(btn => btn.classList.remove('selected'));
        this.planFormatBtns.forEach(btn => btn.classList.remove('selected'));
        
        // Clear system instructions
        this.systemInstructionsInput.value = '';
        this.autoResizeSystemInput();
        
        this.showActionFeedback('Plan reset', '#f59e0b');
    }
    
    handlePreviewAI() {
        const currentPrompt = this.systemInstructionsInput.value.trim();
        if (!currentPrompt) {
            this.showPreviewModal('No system instructions to preview. Try using Plan Mode or writing custom instructions first.');
            return;
        }
        
        // Analyze the prompt and provide suggestions
        const analysis = this.analyzePrompt(currentPrompt);
        this.showPreviewModal(analysis.interpretation, analysis.suggestions);
    }
    
    analyzePrompt(prompt) {
        const analysis = {
            interpretation: '',
            suggestions: []
        };
        
        // Basic analysis
        const hasRole = /you are|act as|as a/i.test(prompt);
        const hasGoal = /goal|objective|purpose|help|assist/i.test(prompt);
        const hasTone = /professional|casual|friendly|formal|detailed|concise/i.test(prompt);
        const hasFormat = /bullet|list|essay|table|step|outline/i.test(prompt);
        
        // Generate interpretation
        analysis.interpretation = `AI will treat this as: ${this.generateInterpretation(prompt, hasRole, hasGoal, hasTone, hasFormat)}`;
        
        // Generate suggestions
        if (!hasRole) {
            analysis.suggestions.push({
                text: 'Add a specific role',
                action: () => this.showRoleSuggestion()
            });
        }
        if (!hasGoal) {
            analysis.suggestions.push({
                text: 'Clarify the main goal',
                action: () => this.showGoalSuggestion()
            });
        }
        if (!hasTone) {
            analysis.suggestions.push({
                text: 'Specify tone & style',
                action: () => this.showToneSuggestion()
            });
        }
        if (!hasFormat) {
            analysis.suggestions.push({
                text: 'Define output format',
                action: () => this.showFormatSuggestion()
            });
        }
        
        return analysis;
    }
    
    generateInterpretation(prompt, hasRole, hasGoal, hasTone, hasFormat) {
        if (prompt.length < 20) {
            return 'A very basic request. Consider adding more specific instructions.';
        }
        
        let interpretation = 'A ';
        if (hasRole) interpretation += 'role-specific ';
        if (hasGoal) interpretation += 'goal-oriented ';
        if (hasTone) interpretation += 'tone-defined ';
        if (hasFormat) interpretation += 'format-specific ';
        
        interpretation += 'request for assistance.';
        
        if (!hasRole && !hasGoal) {
            interpretation += ' The AI will provide general help but may lack focus.';
        }
        
        return interpretation;
    }
    
    showPreviewModal(interpretation, suggestions = []) {
        const modal = document.createElement('div');
        modal.className = 'preview-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1002;
            animation: fadeIn 0.3s ease;
        `;
        
        const content = document.createElement('div');
        content.style.cssText = `
            background: var(--color-bg-primary);
            border-radius: var(--border-radius-large);
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: var(--shadow-medium);
            animation: slideUp 0.3s ease;
        `;
        
        let suggestionsHTML = '';
        if (suggestions.length > 0) {
            suggestionsHTML = `
                <div style="margin-top: 20px;">
                    <h4 style="margin: 0 0 12px 0; color: var(--color-text);">Suggestions to improve:</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${suggestions.map((s, i) => `
                            <button class="preview-suggestion-btn" data-index="${i}" style="
                                padding: 6px 12px;
                                background: var(--color-accent-secondary);
                                border: none;
                                border-radius: var(--border-radius-full);
                                color: var(--color-text);
                                font-size: var(--font-size-accent);
                                cursor: pointer;
                                transition: all 0.2s;
                            ">${s.text}</button>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        content.innerHTML = `
            <div style="padding: 24px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h3 style="margin: 0; color: var(--color-text);">AI Interpretation</h3>
                    <button class="close-preview-modal" style="background: none; border: none; color: var(--color-text-placeholder); cursor: pointer; font-size: 18px;">×</button>
                </div>
                <p style="color: var(--color-text); line-height: 1.5; margin: 0;">${interpretation}</p>
                ${suggestionsHTML}
            </div>
        `;
        
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        // Event listeners
        const closeBtn = modal.querySelector('.close-preview-modal');
        closeBtn.addEventListener('click', () => document.body.removeChild(modal));
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) document.body.removeChild(modal);
        });
        
        // Suggestion button listeners
        suggestions.forEach((suggestion, index) => {
            const btn = modal.querySelector(`[data-index="${index}"]`);
            if (btn) {
                btn.addEventListener('mouseenter', () => {
                    btn.style.background = 'var(--color-accent-primary)';
                    btn.style.color = 'var(--color-bg-primary)';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.background = 'var(--color-accent-secondary)';
                    btn.style.color = 'var(--color-text)';
                });
                btn.addEventListener('click', () => {
                    suggestion.action();
                    document.body.removeChild(modal);
                });
            }
        });
    }
    
    showRoleSuggestion() {
        // Highlight the role buttons area
        const roleContainer = document.querySelector('.role-buttons-container');
        if (roleContainer) {
            roleContainer.style.border = '2px solid var(--color-accent-primary)';
            roleContainer.style.borderRadius = 'var(--border-radius-medium)';
            roleContainer.style.padding = '8px';
            setTimeout(() => {
                roleContainer.style.border = '';
                roleContainer.style.borderRadius = '';
                roleContainer.style.padding = '';
            }, 2000);
        }
    }
    
    showGoalSuggestion() {
        this.planModeToggle.checked = true;
        this.openPlanMode();
        this.planGoalSelect.focus();
    }
    
    showToneSuggestion() {
        this.planModeToggle.checked = true;
        this.openPlanMode();
        // Scroll to tone section
        const toneSection = document.querySelector('[data-step="3"]');
        if (toneSection) {
            toneSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    showFormatSuggestion() {
        this.planModeToggle.checked = true;
        this.openPlanMode();
        // Scroll to format section
        const formatSection = document.querySelector('[data-step="4"]');
        if (formatSection) {
            formatSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Custom prompt management
    saveCurrentPrompt() {
        const currentPrompt = this.systemInstructionsInput.value.trim();
        if (!currentPrompt) {
            this.showActionFeedback('No prompt to save', '#f59e0b');
            return;
        }
        
        // Show dialog to get title
        const title = prompt('Enter a title for this prompt:', 'My Custom Prompt');
        if (!title) return;
        
        const CUSTOM_PROMPTS_KEY = 'customPrompts';
        let customPrompts = JSON.parse(localStorage.getItem(CUSTOM_PROMPTS_KEY)) || [];
        
        // Check for duplicate titles
        const existingIndex = customPrompts.findIndex(item => item.title === title);
        if (existingIndex !== -1) {
            if (!confirm('A prompt with this title already exists. Replace it?')) {
                return;
            }
            customPrompts.splice(existingIndex, 1);
        }
        
        // Add new prompt
        customPrompts.unshift({
            title: title,
            prompt: currentPrompt,
            timestamp: new Date().toISOString()
        });
        
        // Keep only the last 20 custom prompts
        if (customPrompts.length > 20) {
            customPrompts = customPrompts.slice(0, 20);
        }
        
        localStorage.setItem(CUSTOM_PROMPTS_KEY, JSON.stringify(customPrompts));
        this.showActionFeedback(`Prompt "${title}" saved!`, '#10b981');
    }
    
    getCustomPrompts() {
        const CUSTOM_PROMPTS_KEY = 'customPrompts';
        return JSON.parse(localStorage.getItem(CUSTOM_PROMPTS_KEY)) || [];
    }
    
    populateCustomSection(customItemsContainer, customSection) {
        const customPrompts = this.getCustomPrompts();
        
        if (customPrompts.length === 0) {
            customSection.style.display = 'none';
            return;
        }
        
        customSection.style.display = 'block';
        customItemsContainer.innerHTML = '';
        
        customPrompts.forEach((item, index) => {
            const customItem = document.createElement('div');
            customItem.className = 'gallery-item custom-item';
            customItem.dataset.prompt = item.prompt;
            
            const timeAgo = this.getTimeAgo(new Date(item.timestamp));
            
            customItem.innerHTML = `
                <div class="gallery-item-title">${item.title}</div>
                <div class="gallery-item-description">Saved ${timeAgo}</div>
                <button class="delete-custom-prompt" data-index="${index}" title="Delete this prompt">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            // Add delete functionality
            const deleteBtn = customItem.querySelector('.delete-custom-prompt');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm(`Delete "${item.title}"?`)) {
                    this.deleteCustomPrompt(index);
                    customItem.remove();
                    // Check if section should be hidden
                    if (customItemsContainer.children.length === 0) {
                        customSection.style.display = 'none';
                    }
                }
            });
            
            customItemsContainer.appendChild(customItem);
        });
    }
    
    deleteCustomPrompt(index) {
        const CUSTOM_PROMPTS_KEY = 'customPrompts';
        let customPrompts = JSON.parse(localStorage.getItem(CUSTOM_PROMPTS_KEY)) || [];
        
        if (index >= 0 && index < customPrompts.length) {
            const deletedTitle = customPrompts[index].title;
            customPrompts.splice(index, 1);
            localStorage.setItem(CUSTOM_PROMPTS_KEY, JSON.stringify(customPrompts));
            this.showActionFeedback(`"${deletedTitle}" deleted`, '#ef4444');
        }
    }

    // Recent prompts management
    saveRecentPrompt(prompt, title) {
        const RECENT_PROMPTS_KEY = 'recentPrompts';
        let recentPrompts = JSON.parse(localStorage.getItem(RECENT_PROMPTS_KEY)) || [];
        
        // Remove existing entry if it exists
        recentPrompts = recentPrompts.filter(item => item.prompt !== prompt);
        
        // Add new entry at the beginning
        recentPrompts.unshift({
            prompt: prompt,
            title: title,
            timestamp: new Date().toISOString()
        });
        
        // Keep only the last 6 recent prompts
        if (recentPrompts.length > 6) {
            recentPrompts = recentPrompts.slice(0, 6);
        }
        
        localStorage.setItem(RECENT_PROMPTS_KEY, JSON.stringify(recentPrompts));
    }
    
    getRecentPrompts() {
        const RECENT_PROMPTS_KEY = 'recentPrompts';
        return JSON.parse(localStorage.getItem(RECENT_PROMPTS_KEY)) || [];
    }
    
    populateRecentSection(recentItemsContainer, recentSection) {
        const recentPrompts = this.getRecentPrompts();
        
        if (recentPrompts.length === 0) {
            recentSection.style.display = 'none';
            return;
        }
        
        recentSection.style.display = 'block';
        recentItemsContainer.innerHTML = '';
        
        recentPrompts.forEach(item => {
            const recentItem = document.createElement('div');
            recentItem.className = 'gallery-item recent-item';
            recentItem.dataset.prompt = item.prompt;
            
            const timeAgo = this.getTimeAgo(new Date(item.timestamp));
            
            recentItem.innerHTML = `
                <div class="gallery-item-title">${item.title}</div>
                <div class="gallery-item-description">Used ${timeAgo}</div>
            `;
            
            recentItemsContainer.appendChild(recentItem);
        });
    }
    
    getTimeAgo(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        if (diffInSeconds < 60) return 'just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
        return `${Math.floor(diffInSeconds / 86400)}d ago`;
    }

    handleBrowseGallery() {
        // Create a modal-like gallery browser
        const galleryModal = document.createElement('div');
        galleryModal.className = 'gallery-modal';
        galleryModal.innerHTML = `
            <div class="gallery-modal-content">
                <div class="gallery-header">
                    <h3>Prompt Gallery</h3>
                    <div class="gallery-header-actions">
                        <button class="save-current-prompt-btn" id="saveCurrentPrompt" title="Save current prompt">
                            <i class="fas fa-bookmark"></i>
                            Save my prompt
                        </button>
                        <button class="close-gallery" title="Close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="gallery-categories">
                    <div class="gallery-category recent-section" id="recentSection" style="display: none;">
                        <h4><i class="fas fa-history"></i> Recent</h4>
                        <div class="gallery-items" id="recentItems">
                            <!-- Recent items will be populated by JavaScript -->
                        </div>
                    </div>
                    <div class="gallery-category custom-section" id="customSection" style="display: none;">
                        <h4><i class="fas fa-bookmark"></i> My Prompts</h4>
                        <div class="gallery-items" id="customItems">
                            <!-- Custom items will be populated by JavaScript -->
                        </div>
                    </div>
                    <div class="gallery-category">
                        <h4><i class="fas fa-robot"></i> AI Assistant Prompts</h4>
                        <div class="gallery-items">
                            <div class="gallery-item" data-prompt="You are a helpful coding assistant. Help me write clean, efficient code and explain complex programming concepts in simple terms.">
                                <div class="gallery-item-title">Coding Assistant</div>
                                <div class="gallery-item-description">Get help with programming, code reviews, and technical explanations</div>
                            </div>
                            <div class="gallery-item" data-prompt="You are a creative writing partner. Help me brainstorm ideas, improve my writing style, and provide constructive feedback on my stories and articles.">
                                <div class="gallery-item-title">Writing Partner</div>
                                <div class="gallery-item-description">Enhance your writing with creative ideas and constructive feedback</div>
                            </div>
                            <div class="gallery-item" data-prompt="You are a patient tutor. Break down complex topics into digestible pieces and use analogies to help me understand difficult concepts.">
                                <div class="gallery-item-title">Personal Tutor</div>
                                <div class="gallery-item-description">Learn complex topics with clear explanations and helpful analogies</div>
                            </div>
                        </div>
                    </div>
                    <div class="gallery-category">
                        <h4><i class="fas fa-briefcase"></i> Business & Professional</h4>
                        <div class="gallery-items">
                            <div class="gallery-item" data-prompt="Help me analyze this business proposal. Provide insights on market viability, potential risks, and suggestions for improvement.">
                                <div class="gallery-item-title">Business Analysis</div>
                                <div class="gallery-item-description">Analyze proposals, market viability, and business strategies</div>
                            </div>
                            <div class="gallery-item" data-prompt="You are a professional email assistant. Help me write clear, concise, and appropriately toned business emails.">
                                <div class="gallery-item-title">Email Writing</div>
                                <div class="gallery-item-description">Craft professional, clear, and effective business communications</div>
                            </div>
                            <div class="gallery-item" data-prompt="Act as a project manager. Help me break down this project into manageable tasks with timelines and resource requirements.">
                                <div class="gallery-item-title">Project Planning</div>
                                <div class="gallery-item-description">Break down projects into manageable tasks with timelines</div>
                            </div>
                        </div>
                    </div>
                    <div class="gallery-category">
                        <h4><i class="fas fa-lightbulb"></i> Creative & Fun</h4>
                        <div class="gallery-items">
                            <div class="gallery-item" data-prompt="You are a creative brainstorming partner. Help me generate unique and innovative ideas for my creative projects.">
                                <div class="gallery-item-title">Creative Brainstorming</div>
                                <div class="gallery-item-description">Generate unique and innovative ideas for creative projects</div>
                            </div>
                            <div class="gallery-item" data-prompt="Create engaging social media content that resonates with my audience and drives engagement.">
                                <div class="gallery-item-title">Social Media Content</div>
                                <div class="gallery-item-description">Create engaging content that resonates and drives engagement</div>
                            </div>
                            <div class="gallery-item" data-prompt="You are a storyteller. Help me create compelling narratives with interesting characters and plot twists.">
                                <div class="gallery-item-title">Story Creation</div>
                                <div class="gallery-item-description">Craft compelling narratives with interesting characters and plot twists</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles for the modal
        const modalStyle = document.createElement('style');
        modalStyle.textContent = `
            .gallery-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            
            .gallery-modal-content {
                background: white;
                border-radius: 12px;
                max-width: 1200px;
                width: 95%;
                max-height: 85vh;
                overflow-y: auto;
                margin: 20px;
                animation: scaleIn 0.3s ease;
            }
            
            .gallery-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 24px 24px 0 24px;
                margin-bottom: 24px;
            }
            
            .gallery-header-actions {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .save-current-prompt-btn {
                background: var(--color-accent-primary);
                border: none;
                color: var(--color-bg-primary);
                padding: 8px 16px;
                border-radius: var(--border-radius-medium);
                font-size: var(--font-size-accent);
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .save-current-prompt-btn:hover {
                background: var(--color-highlight);
                transform: translateY(-1px);
            }
            
            .gallery-header h3 {
                margin: 0;
                font-size: 20px;
                font-weight: 600;
                color: var(--secondary-900);
            }
            
            .close-gallery {
                background: none;
                border: none;
                font-size: 18px;
                color: var(--secondary-500);
                cursor: pointer;
                padding: 8px;
                border-radius: 50%;
                transition: all 0.2s;
            }
            
            .close-gallery:hover {
                background: var(--secondary-100);
                color: var(--secondary-700);
            }
            
            .gallery-categories {
                padding: 0 24px 24px;
            }
            
            .gallery-category {
                margin-bottom: 32px;
            }
            
            .gallery-category h4 {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 16px;
                font-size: 16px;
                font-weight: 600;
                color: var(--secondary-800);
            }
            
            .gallery-items {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 16px;
            }
            
            .gallery-item {
                background: var(--color-bg-primary);
                border: 2px solid var(--color-border);
                border-radius: var(--border-radius-medium);
                padding: 20px;
                cursor: pointer;
                transition: all 0.2s;
                font-size: 14px;
                font-weight: 500;
                color: var(--color-text);
                box-shadow: var(--shadow-light);
                position: relative;
                min-height: 120px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            
            .gallery-item:hover {
                background: var(--color-bg-secondary);
                border-color: var(--color-accent-primary);
                color: var(--color-accent-primary);
                transform: translateY(-2px);
                box-shadow: var(--shadow-medium);
            }
            
            .gallery-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
                border-radius: var(--border-radius-medium) var(--border-radius-medium) 0 0;
            }
            
            .gallery-item-title {
                font-size: 16px;
                font-weight: 600;
                color: var(--color-text);
                margin-bottom: 8px;
                line-height: 1.3;
            }
            
            .gallery-item-description {
                font-size: 13px;
                font-weight: 400;
                color: var(--color-text-placeholder);
                line-height: 1.4;
                flex-grow: 1;
            }
            
            .gallery-item:hover .gallery-item-title {
                color: var(--color-accent-primary);
            }
            
            .gallery-item:hover .gallery-item-description {
                color: var(--color-text);
            }
            
            .recent-item {
                border-color: var(--color-accent-secondary);
                background: rgba(255, 198, 39, 0.05);
            }
            
            .recent-item::before {
                background: var(--color-accent-secondary);
            }
            
            .recent-item:hover {
                border-color: var(--color-accent-primary);
                background: rgba(140, 29, 64, 0.05);
            }
            
            .recent-section h4 {
                color: var(--color-accent-secondary);
            }
            
            .custom-item {
                border-color: var(--color-accent-primary);
                background: rgba(140, 29, 64, 0.05);
                position: relative;
            }
            
            .custom-item::before {
                background: var(--color-accent-primary);
            }
            
            .custom-item:hover {
                border-color: var(--color-highlight);
                background: rgba(0, 163, 224, 0.05);
            }
            
            .custom-section h4 {
                color: var(--color-accent-primary);
            }
            
            .delete-custom-prompt {
                position: absolute;
                top: 8px;
                right: 8px;
                background: none;
                border: none;
                color: var(--color-text-placeholder);
                cursor: pointer;
                padding: 4px;
                border-radius: var(--border-radius-small);
                opacity: 0;
                transition: all 0.2s;
                font-size: 12px;
            }
            
            .custom-item:hover .delete-custom-prompt {
                opacity: 1;
            }
            
            .delete-custom-prompt:hover {
                background: #ef4444;
                color: white;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes scaleIn {
                from { transform: scale(0.9); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
        `;
        
        document.head.appendChild(modalStyle);
        document.body.appendChild(galleryModal);
        
        // Populate recent section
        const recentSection = galleryModal.querySelector('#recentSection');
        const recentItemsContainer = galleryModal.querySelector('#recentItems');
        this.populateRecentSection(recentItemsContainer, recentSection);
        
        // Populate custom prompts section
        const customSection = galleryModal.querySelector('#customSection');
        const customItemsContainer = galleryModal.querySelector('#customItems');
        this.populateCustomSection(customItemsContainer, customSection);
        
        // Add event listeners for gallery items and close button
        const closeBtn = galleryModal.querySelector('.close-gallery');
        const saveCurrentBtn = galleryModal.querySelector('#saveCurrentPrompt');
        const galleryItems = galleryModal.querySelectorAll('.gallery-item');
        
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(galleryModal);
            document.head.removeChild(modalStyle);
        });
        
        saveCurrentBtn.addEventListener('click', () => {
            this.saveCurrentPrompt();
            document.body.removeChild(galleryModal);
            document.head.removeChild(modalStyle);
        });
        
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) {
                document.body.removeChild(galleryModal);
                document.head.removeChild(modalStyle);
            }
        });
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const prompt = item.dataset.prompt;
                this.chatInput.value = prompt;
                this.autoResizeChatInput();
                this.updateTokenCount();
                this.chatInput.focus();
                
                document.body.removeChild(galleryModal);
                document.head.removeChild(modalStyle);
                
                const titleElement = item.querySelector('.gallery-item-title');
                const title = titleElement ? titleElement.textContent : item.textContent;
                
                // Save to recent prompts (only if not already a recent item)
                if (!item.classList.contains('recent-item')) {
                    this.saveRecentPrompt(prompt, title);
                }
                
                this.showTemplateFeedback(title);
            });
        });
    }
    
    handleHelpMeWrite() {
        // Show the new Help me write modal
        this.showHelpWriteModal();
    }
    
    showBasicPromptSuggestions() {
        const modal = document.createElement('div');
        modal.className = 'help-write-modal';
        modal.innerHTML = `
            <div class="help-write-modal-content">
                <div class="help-write-header">
                    <h2 class="help-write-title">
                        <i class="fas fa-magic"></i>
                        Prompt Coach
                    </h2>
                </div>
                
                <div class="help-write-body">
                    <div class="coach-intro">
                        <p>I'll help you write better prompts! Start by typing something in the chat box, or choose from these popular patterns:</p>
                    </div>
                    
                    <div class="suggestion-buttons-section">
                        <button class="suggestion-btn" data-suggestion="Help me brainstorm ideas for [your topic]. I need creative and practical suggestions.">Brainstorm ideas</button>
                        <button class="suggestion-btn" data-suggestion="Explain [concept] in simple terms with examples. I want to understand the key principles.">Explain a concept</button>
                        <button class="suggestion-btn" data-suggestion="Review and improve this [content type]: [paste your content here]. Focus on clarity and engagement.">Review content</button>
                        <button class="suggestion-btn" data-suggestion="Create a step-by-step guide for [task]. Include tips and common mistakes to avoid.">Create guide</button>
                        <button class="suggestion-btn" data-suggestion="Analyze the pros and cons of [topic/decision]. Help me make an informed choice.">Analyze options</button>
                    </div>
                </div>
                
                <div class="help-write-footer">
                    <button class="help-write-cancel-btn">Cancel</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Handle suggestion button clicks
        suggestionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const suggestion = btn.dataset.suggestion;
                this.chatInput.value = suggestion;
                this.autoResizeChatInput();
                this.updateTokenCount();
                this.chatInput.focus();
                document.body.removeChild(modal);
                
                this.showTemplateFeedback(btn.textContent + ' template loaded!');
            });
        });
        
        // Handle cancel button
        cancelBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Handle click outside modal to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        // Handle escape key to close modal
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', handleEscapeKey);
            }
        };
        document.addEventListener('keydown', handleEscapeKey);
    }
    
    showPromptCoaching(currentPrompt) {
        const analysis = this.analyzePromptForCoaching(currentPrompt);
        const improvements = this.generatePromptImprovements(currentPrompt, analysis);
        
        const modal = document.createElement('div');
        modal.className = 'help-write-modal';
        modal.innerHTML = `
            <div class="help-write-modal-content">
                <div class="help-write-header">
                    <h2 class="help-write-title">
                        <i class="fas fa-graduation-cap"></i>
                        Prompt Coach
                    </h2>
                </div>
                
                <div class="help-write-body">
                    <div class="coach-analysis">
                        <h3>Your current prompt:</h3>
                        <div class="current-prompt-display">"${currentPrompt}"</div>
                        
                        <h3>Analysis:</h3>
                        <p class="analysis-text">${analysis.feedback}</p>
                    </div>
                    
                    <div class="improvements-section">
                        <h3>Here are ${improvements.length} better versions:</h3>
                        <div class="improvement-options">
                            ${improvements.map((improvement, index) => `
                                <div class="improvement-option" data-index="${index}">
                                    <div class="improvement-header">
                                        <span class="improvement-badge">${improvement.reason}</span>
                                    </div>
                                    <div class="improvement-text">"${improvement.prompt}"</div>
                                    <button class="use-improvement-btn" data-index="${index}">Use this version</button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="help-write-footer">
                    <button class="help-write-cancel-btn">Keep original</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Handle improvement selection
        const improvementBtns = modal.querySelectorAll('.use-improvement-btn');
        improvementBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.index);
                const selectedImprovement = improvements[index];
                
                this.chatInput.value = selectedImprovement.prompt;
                this.autoResizeChatInput();
                this.updateTokenCount();
                this.chatInput.focus();
                document.body.removeChild(modal);
                
                this.showTemplateFeedback(`Improved prompt applied! (${selectedImprovement.reason})`);
            });
        });
        
        // Handle cancel button
        const cancelBtn = modal.querySelector('.help-write-cancel-btn');
        cancelBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Handle click outside modal to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
    
    analyzePromptForCoaching(prompt) {
        const analysis = {
            length: prompt.length,
            hasContext: /context|background|about|regarding/i.test(prompt),
            hasSpecificRequest: /please|help|can you|would you|i need|i want/i.test(prompt),
            hasTone: /professional|casual|friendly|formal|detailed|concise|creative/i.test(prompt),
            hasFormat: /bullet|list|essay|table|step|outline|summary/i.test(prompt),
            hasRole: /you are|act as|as a|pretend|imagine you/i.test(prompt),
            isQuestion: prompt.includes('?'),
            feedback: ''
        };
        
        // Generate feedback
        let feedback = [];
        
        if (analysis.length < 10) {
            feedback.push("Very short prompt - could be more specific");
        } else if (analysis.length < 30) {
            feedback.push("Short prompt - adding more detail would help");
        }
        
        if (!analysis.hasSpecificRequest) {
            feedback.push("Could be clearer about what you want");
        }
        
        if (!analysis.hasContext && analysis.length < 50) {
            feedback.push("Missing context or background information");
        }
        
        if (!analysis.hasTone) {
            feedback.push("No specified tone or style");
        }
        
        if (!analysis.hasFormat) {
            feedback.push("No preferred output format specified");
        }
        
        if (feedback.length === 0) {
            analysis.feedback = "Good prompt! Here are some variations that might work even better:";
        } else {
            analysis.feedback = "I can help improve this prompt: " + feedback.join(", ") + ".";
        }
        
        return analysis;
    }
    
    generatePromptImprovements(originalPrompt, analysis) {
        const improvements = [];
        
        // Add context improvement
        if (!analysis.hasContext) {
            improvements.push({
                prompt: `${originalPrompt} Please provide detailed context and consider relevant background information in your response.`,
                reason: "Added context request"
            });
        }
        
        // Add tone improvement
        if (!analysis.hasTone) {
            improvements.push({
                prompt: `${originalPrompt} Please respond in a clear, professional tone with practical examples.`,
                reason: "Added tone specification"
            });
        }
        
        // Add format improvement
        if (!analysis.hasFormat) {
            improvements.push({
                prompt: `${originalPrompt} Please structure your response with clear headings and bullet points for easy reading.`,
                reason: "Added format structure"
            });
        }
        
        // Add comprehensive improvement
        improvements.push({
            prompt: `Please help me with the following request: ${originalPrompt}. Provide a comprehensive response that includes relevant context, practical examples, and actionable insights. Structure your answer clearly and explain your reasoning.`,
            reason: "Comprehensive improvement"
        });
        
        // If original was very short, add an expanded version
        if (analysis.length < 30) {
            improvements.push({
                prompt: `I need detailed assistance with: ${originalPrompt}. Please provide step-by-step guidance, explain key concepts, and include relevant examples. Consider potential challenges and offer practical solutions.`,
                reason: "Expanded with details"
            });
        }
        
        return improvements.slice(0, 3); // Return top 3 improvements
    }
    
    // New Help me write modal implementation
    showHelpWriteModal() {
        const modal = document.getElementById('helpWriteModal');
        if (!modal) return;
        
        // Reset modal state
        this.resetHelpWriteModal();
        
        // Show modal
        modal.style.display = 'flex';
        
        // Focus on input
        const input = document.getElementById('helpWriteInput');
        if (input) {
            setTimeout(() => input.focus(), 100);
        }
        
        // Initialize event listeners if not already done
        if (!modal.dataset.initialized) {
            this.initializeHelpWriteModal();
            modal.dataset.initialized = 'true';
        }
    }
    
    resetHelpWriteModal() {
        const input = document.getElementById('helpWriteInput');
        const preview = document.getElementById('helpWritePreview');
        const chips = document.querySelectorAll('.help-write-chip');
        
        if (input) input.value = '';
        if (preview) preview.style.display = 'none';
        
        chips.forEach(chip => chip.classList.remove('selected'));
    }
    
    initializeHelpWriteModal() {
        const modal = document.getElementById('helpWriteModal');
        const closeBtn = document.getElementById('helpWriteClose');
        const generateBtn = document.getElementById('helpWriteGenerate');
        const insertBtn = document.getElementById('helpWriteInsert');
        const regenerateBtn = document.getElementById('helpWriteRegenerate');
        const backdrop = modal.querySelector('.help-write-backdrop');
        const chips = document.querySelectorAll('.help-write-chip');
        
        // Close modal handlers
        const closeModal = () => {
            modal.style.display = 'none';
        };
        
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (backdrop) backdrop.addEventListener('click', closeModal);
        
        // Chip selection
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const type = chip.dataset.type;
                const sameTypeChips = document.querySelectorAll(`[data-type="${type}"]`);
                
                // Toggle selection within the same type
                if (chip.classList.contains('selected')) {
                    chip.classList.remove('selected');
                } else {
                    sameTypeChips.forEach(c => c.classList.remove('selected'));
                    chip.classList.add('selected');
                }
            });
        });
        
        // Generate optimized prompt
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generateOptimizedPrompt());
        }
        
        // Insert prompt into chat
        if (insertBtn) {
            insertBtn.addEventListener('click', () => this.insertOptimizedPrompt());
        }
        
        // Regenerate prompt
        if (regenerateBtn) {
            regenerateBtn.addEventListener('click', () => this.generateOptimizedPrompt());
        }
        
        // Handle escape key
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleEscapeKey);
    }
    
    generateOptimizedPrompt() {
        const input = document.getElementById('helpWriteInput');
        const preview = document.getElementById('helpWritePreview');
        const previewText = document.getElementById('helpWritePreviewText');
        const generateBtn = document.getElementById('helpWriteGenerate');
        
        if (!input || !input.value.trim()) {
            alert('Please describe what you want to achieve first.');
            return;
        }
        
        // Disable generate button temporarily
        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';
        
        // Get selected refinements
        const selectedChips = document.querySelectorAll('.help-write-chip.selected');
        const refinements = {
            role: null,
            tone: null,
            format: null
        };
        
        selectedChips.forEach(chip => {
            const type = chip.dataset.type;
            const value = chip.dataset.value;
            refinements[type] = value;
        });
        
        // Generate optimized prompt
        const originalIntent = input.value.trim();
        const optimizedPrompt = this.createOptimizedPrompt(originalIntent, refinements);
        
        // Show preview
        setTimeout(() => {
            if (previewText) previewText.textContent = optimizedPrompt;
            if (preview) preview.style.display = 'block';
            
            // Re-enable generate button
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Optimized Prompt';
        }, 800); // Simulate processing time
    }
    
    createOptimizedPrompt(intent, refinements) {
        let prompt = '';
        
        // Add role context if specified
        if (refinements.role) {
            const roleContexts = {
                teacher: 'As an experienced educator who excels at breaking down complex topics,',
                analyst: 'As a detail-oriented analyst with strong critical thinking skills,',
                designer: 'As a creative designer with expertise in user experience and aesthetics,'
            };
            prompt += roleContexts[refinements.role] + ' ';
        }
        
        // Clean up and enhance the main intent
        let cleanIntent = intent.trim();
        
        // Add proper question structure if it's not already there
        if (!cleanIntent.match(/\?$/) && !cleanIntent.toLowerCase().startsWith('help') && !cleanIntent.toLowerCase().startsWith('explain') && !cleanIntent.toLowerCase().startsWith('create')) {
            if (cleanIntent.toLowerCase().includes('how') || cleanIntent.toLowerCase().includes('what') || cleanIntent.toLowerCase().includes('why') || cleanIntent.toLowerCase().includes('when') || cleanIntent.toLowerCase().includes('where')) {
                // It's already a question, just ensure proper punctuation
                if (!cleanIntent.endsWith('?')) cleanIntent += '?';
            } else {
                // Turn into a clear request
                cleanIntent = 'Help me ' + cleanIntent.toLowerCase();
                if (!cleanIntent.endsWith('.') && !cleanIntent.endsWith('?')) cleanIntent += '.';
            }
        }
        
        prompt += cleanIntent;
        
        // Add tone specification
        if (refinements.tone) {
            const toneSpecs = {
                casual: ' Please respond in a conversational, approachable tone.',
                professional: ' Please maintain a professional, authoritative tone.',
                friendly: ' Please use a warm, encouraging tone throughout your response.'
            };
            prompt += toneSpecs[refinements.tone];
        }
        
        // Add format specification
        if (refinements.format) {
            const formatSpecs = {
                bullets: ' Structure your response using clear bullet points for easy scanning.',
                essay: ' Provide a well-structured essay format with clear introduction, body, and conclusion.',
                code: ' Include relevant code examples and technical implementation details.',
                table: ' Organize the information in a clear table format when appropriate.'
            };
            prompt += formatSpecs[refinements.format];
        }
        
        // Add general optimization based on context
        if (!refinements.tone && !refinements.format) {
            // Add contextual improvements based on the type of request
            if (cleanIntent.toLowerCase().includes('explain') || cleanIntent.toLowerCase().includes('what is')) {
                prompt += ' Please provide clear explanations with practical examples and break down complex concepts into understandable parts.';
            } else if (cleanIntent.toLowerCase().includes('help') || cleanIntent.toLowerCase().includes('how')) {
                prompt += ' Please provide step-by-step guidance with actionable advice and practical tips.';
            } else if (cleanIntent.toLowerCase().includes('create') || cleanIntent.toLowerCase().includes('write') || cleanIntent.toLowerCase().includes('make')) {
                prompt += ' Please provide detailed instructions and examples to help me create high-quality results.';
            } else {
                prompt += ' Please provide a comprehensive, well-structured response with clear explanations and practical examples.';
            }
        }
        
        return prompt;
    }
    
    insertOptimizedPrompt() {
        const previewText = document.getElementById('helpWritePreviewText');
        const modal = document.getElementById('helpWriteModal');
        
        if (previewText && previewText.textContent) {
            // Insert the optimized prompt into the chat input
            this.chatInput.value = previewText.textContent;
            this.autoResizeChatInput();
            this.updateTokenCount();
            
            // Close modal
            modal.style.display = 'none';
            
            // Focus on chat input
            this.chatInput.focus();
            
            // Show feedback
            this.showActionFeedback('Optimized prompt inserted!', '#10b981');
        }
    }
    
    handleCompare() {
        if (this.chatMessages.children.length < 2) {
            alert('You need at least 2 messages to compare responses.');
            return;
        }
        
        console.log('Compare feature activated - would compare different AI responses');
        this.showActionFeedback('Compare mode activated', 'var(--accent-blue)');
    }
    
    handleSave() {
        // Save current conversation
        const messages = Array.from(this.chatMessages.children).map(msg => {
            const isBot = msg.classList.contains('bot-message');
            const content = msg.querySelector('.message-bubble').textContent;
            return { type: isBot ? 'bot' : 'user', content };
        });
        
        const conversationData = {
            messages,
            systemInstructions: this.customInstructionsTextarea.value,
            model: this.modelSelect.value,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('savedConversation', JSON.stringify(conversationData));
        this.showActionFeedback('Conversation saved!', '#10b981');
    }
    
    handleClear() {
        if (confirm('Are you sure you want to clear the conversation?')) {
            this.clearChat();
            this.chatInput.value = '';
            this.updateTokenCount();
            this.showActionFeedback('Conversation cleared', '#ef4444');
        }
    }
    
    showActionFeedback(message, color) {
        const feedback = document.createElement('div');
        feedback.textContent = message;
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${color};
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (document.body.contains(feedback)) {
                    document.body.removeChild(feedback);
                }
            }, 300);
        }, 2000);
    }
    
    autoResizeChatInput() {
        this.chatInput.style.height = 'auto';
        this.chatInput.style.height = Math.min(this.chatInput.scrollHeight, 120) + 'px';
        
        // Enable/disable send button based on content
        const hasContent = this.chatInput.value.trim().length > 0;
        this.chatSendBtn.disabled = !hasContent;
    }
    
    sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        
        // Clear input
        this.chatInput.value = '';
        this.autoResizeChatInput();
        this.updateTokenCount();
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Simulate AI response
        setTimeout(() => {
            this.hideTypingIndicator();
            this.generateAIResponse(message);
        }, 1000 + Math.random() * 2000); // Random delay 1-3 seconds
    }
    
    addMessage(content, type = 'bot', timestamp = null) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}-message`;
        
        const avatarIcon = type === 'bot' ? 'fas fa-robot' : 'fas fa-user';
        const timeStr = timestamp || this.getCurrentTime();
        
        messageElement.innerHTML = `
            <div class="message-avatar">
                <i class="${avatarIcon}"></i>
            </div>
            <div class="message-content">
                <div class="message-bubble">
                    ${content}
                </div>
                <div class="message-time">${timeStr}</div>
            </div>
        `;
        
        this.chatMessages.appendChild(messageElement);
        this.scrollToBottom();
    }
    
    showTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.className = 'message bot-message typing-indicator-message';
        typingElement.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dots">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            </div>
        `;
        
        this.chatMessages.appendChild(typingElement);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        const typingIndicator = this.chatMessages.querySelector('.typing-indicator-message');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    async generateAIResponse(userMessage) {
        // Get system instructions
        const instructions = this.systemInstructionsInput.value || this.systemInstructionsInput.placeholder;
        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage, system: instructions })
            });
            const data = await response.json();
            if (data.response) {
                this.addMessage(data.response, 'bot');
            } else {
                this.addMessage('Sorry, I could not get a response from the LLM.', 'bot');
            }
        } catch (error) {
            this.addMessage('Error contacting backend: ' + error.message, 'bot');
        }
    }
    
    generateContextualResponse(userMessage, instructions) {
        const message = userMessage.toLowerCase();
        
        // Extract key characteristics from instructions
        const isTutor = instructions.toLowerCase().includes('tutor') || instructions.toLowerCase().includes('teach');
        const isHelpful = instructions.toLowerCase().includes('helpful');
        const isConcise = instructions.toLowerCase().includes('concise');
        
        // Generate responses based on message content and instructions
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            if (isTutor) {
                return "Hello! I'm here to help you learn. What would you like to explore today?";
            }
            return "Hi there! How can I assist you today?";
        }
        
        if (message.includes('explain') || message.includes('what is') || message.includes('how does')) {
            if (isTutor && isConcise) {
                return "I'd be happy to explain that in simple terms! Could you be more specific about what you'd like to understand?";
            }
            return "I can help explain that concept. What specifically would you like to know more about?";
        }
        
        if (message.includes('help') || message.includes('assist')) {
            return "Of course! I'm here to help. What do you need assistance with?";
        }
        
        if (message.includes('example') || message.includes('show me')) {
            if (isTutor) {
                return "Great question! I love using examples to make things clearer. What topic would you like me to demonstrate?";
            }
            return "I can provide examples to illustrate the concept. What would you like me to show you?";
        }
        
        // Default responses based on instructions
        if (isTutor && isConcise) {
            return "That's an interesting question! Let me break it down into simple terms. Could you provide a bit more context so I can give you the most helpful explanation?";
        } else if (isHelpful) {
            return "I'd be happy to help you with that! Could you provide more details about what you're looking for?";
        } else {
            return "Thank you for your message! How can I best assist you with this?";
        }
    }
    
    clearChat() {
        this.chatMessages.innerHTML = '';
    }
    
    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    updateCharacterCounter(input, counter, maxLength) {
        const currentLength = input.value.length;
        counter.textContent = `${currentLength} / ${maxLength}`;
        
        // Visual feedback for approaching limit
        if (currentLength > maxLength * 0.9) {
            counter.style.color = '#ef4444'; // Red for warning
        } else if (currentLength > maxLength * 0.8) {
            counter.style.color = '#f59e0b'; // Amber for caution
        } else {
            counter.style.color = '#94a3b8'; // Default gray
        }
    }
    
    updateCharacterCounters() {
        this.updateCharacterCounter(this.projectSubtitleInput, this.projectSubtitleCounter, 240);
    }
    
    updatePreview() {
        // Update preview content based on form inputs
        const projectName = this.breadcrumbTitle.textContent.trim();
        const projectSubtitle = this.projectSubtitleInput.value;
        const model = this.modelSelect.value;
        const instructions = this.systemInstructionsInput.value;
        const memoryEnabled = this.chatMemoryToggle.checked;
        const knowledgeBaseEnabled = this.knowledgeBaseToggle.checked;
        
        console.log('Project updated:', {
            name: projectName,
            subtitle: projectSubtitle,
            model: model,
            instructions: instructions,
            memoryEnabled: memoryEnabled,
            knowledgeBaseEnabled: knowledgeBaseEnabled
        });
    }
    
    updateBreadcrumbTitle() {
        // Initialize breadcrumb title if empty
        if (!this.breadcrumbTitle.textContent.trim()) {
            this.breadcrumbTitle.textContent = 'New Project';
        }
    }
    
    syncBreadcrumbToInput() {
        // No longer needed since there's no project name input
        // Just update the preview
        this.updatePreview();
    }
    
    handleMemoryToggleChange() {
        const isEnabled = this.chatMemoryToggle.checked;
        
        if (isEnabled) {
            console.log('Chat memory enabled - AI will remember conversation context');
            this.showActionFeedback('Chat memory enabled', '#10b981');
        } else {
            console.log('Chat memory disabled - AI will treat each message independently');
            this.showActionFeedback('Chat memory disabled', '#f59e0b');
        }
    }
    
    handleKnowledgeBaseToggleChange() {
        const isEnabled = this.knowledgeBaseToggle.checked;
        
        if (isEnabled) {
            console.log('Knowledge base access enabled - AI can access your knowledge base');
            this.showActionFeedback('Knowledge base access enabled', '#10b981');
        } else {
            console.log('Knowledge base access disabled - AI will only use its training data');
            this.showActionFeedback('Knowledge base access disabled', '#f59e0b');
        }
    }
    
    handleNavigationClick(item) {
        // Remove active class from all nav items
        this.navItems.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        const navText = item.querySelector('span').textContent;
        console.log('Navigated to:', navText);
        
        // Here you would typically load different content based on navigation
        // For now, we'll just log the navigation
    }
    
    handleEditView() {
        console.log('Edit view clicked');
        // Here you would typically toggle between edit and preview modes
    }
    
    handleFullscreen() {
        console.log('Fullscreen clicked');
        // Here you would typically toggle fullscreen mode
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('Error attempting to enable fullscreen:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }
    
    handleUserAvatarClick() {
        console.log('User avatar clicked');
        // Here you would typically open user profile or settings
    }
    
    handleBreadcrumbClick() {
        console.log('Breadcrumb clicked - navigating to Dashboard');
        // Here you would typically navigate back to dashboard
    }
    
    handleProfileClick() {
        console.log('Profile button clicked');
        // Here you would typically open profile or settings
    }
    
    // Utility methods
    saveProject() {
        const projectData = {
            name: this.breadcrumbTitle.textContent.trim(),
            subtitle: this.projectSubtitleInput.value,
            model: this.modelSelect.value,
            instructions: this.systemInstructionsInput.value,
            memoryEnabled: this.chatMemoryToggle.checked,
            knowledgeBaseEnabled: this.knowledgeBaseToggle.checked,
            timestamp: new Date().toISOString()
        };
        
        // Save to localStorage for demo purposes
        localStorage.setItem('aiProject', JSON.stringify(projectData));
        console.log('Project saved:', projectData);
        
        // Show success feedback
        this.showSaveFeedback();
    }
    
    loadProject() {
        const savedProject = localStorage.getItem('aiProject');
        if (savedProject) {
            try {
                const projectData = JSON.parse(savedProject);
                
                this.breadcrumbTitle.textContent = projectData.name || 'New Project';
                this.projectSubtitleInput.value = projectData.subtitle || '';
                this.modelSelect.value = projectData.model || 'gpt-4o-mini';
                this.systemInstructionsInput.value = projectData.instructions || '';
                this.chatMemoryToggle.checked = projectData.memoryEnabled !== undefined ? projectData.memoryEnabled : true;
                this.knowledgeBaseToggle.checked = projectData.knowledgeBaseEnabled !== undefined ? projectData.knowledgeBaseEnabled : false;
                
                this.updateCharacterCounters();
                this.updatePreview();
                this.autoResizeSystemInput();
                
                console.log('Project loaded:', projectData);
            } catch (error) {
                console.error('Error loading project:', error);
            }
        }
    }
    
    showSaveFeedback() {
        // Create a temporary success message
        const feedback = document.createElement('div');
        feedback.textContent = 'Project saved successfully!';
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 2000);
    }
    
    // Auto-save functionality
    setupAutoSave() {
        let autoSaveTimeout;
        
        const inputs = [this.projectSubtitleInput, this.systemInstructionsInput];
        const select = this.modelSelect;
        const toggles = [this.chatMemoryToggle, this.knowledgeBaseToggle];
        
        const triggerAutoSave = () => {
            clearTimeout(autoSaveTimeout);
            autoSaveTimeout = setTimeout(() => {
                this.saveProject();
            }, 2000); // Auto-save after 2 seconds of inactivity
        };
        
        inputs.forEach(input => {
            input.addEventListener('input', triggerAutoSave);
        });
        
        select.addEventListener('change', triggerAutoSave);
        toggles.forEach(toggle => {
            toggle.addEventListener('change', triggerAutoSave);
        });
    }

    rebindPromptPillEvents() {
        this.promptPills = document.querySelectorAll('.prompt-pill');
        this.promptPills.forEach(pill => {
            pill.removeEventListener('click', this._promptPillHandler);
            this._promptPillHandler = () => this.handlePromptPillClick(pill);
            pill.addEventListener('click', this._promptPillHandler);
        });
    }
    
    // Resize functionality
    startResize(e) {
        e.preventDefault();
        
        const startX = e.clientX;
        const startWidth = this.formsPane.offsetWidth;
        
        this.contentArea.classList.add('resizing');
        
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newWidth = Math.max(280, Math.min(600, startWidth + deltaX));
            
            this.formsPane.style.width = newWidth + 'px';
        };
        
        const handleMouseUp = () => {
            this.contentArea.classList.remove('resizing');
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            
            // Save the width preference
            const finalWidth = this.formsPane.offsetWidth;
            localStorage.setItem('formsPaneWidth', finalWidth);
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
    
    loadResizePreference() {
        const savedWidth = localStorage.getItem('formsPaneWidth');
        if (savedWidth) {
            const width = parseInt(savedWidth);
            if (width >= 280 && width <= 600) {
                this.formsPane.style.width = width + 'px';
            }
        }
    }
}

    // Initialize the interface when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const interface = new AIProjectInterface();
    
    // Load any saved project
    interface.loadProject();
    
    // Load resize preference
    interface.loadResizePreference();
    
    // Initialize breadcrumb title
    interface.updateBreadcrumbTitle();
    
    // Setup auto-save
    interface.setupAutoSave();

    // Rebind prompt pill events after DOMContentLoaded
    interface.rebindPromptPillEvents();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + S to save
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            interface.saveProject();
        }
        
        // Escape to clear focus
        if (e.key === 'Escape') {
            document.activeElement.blur();
        }
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // System Instructions History Logic
    const STORAGE_KEY = 'systemInstructionsHistory';
    const historyBtn = document.querySelector('.history-btn');
    const historyDropdown = document.getElementById('historyDropdown');
    const sysInput = document.querySelector('.system-instructions-input');
    const saveBtn = document.querySelector('.system-instructions-save-btn');
    let lastSavedValue = sysInput ? sysInput.value : '';

    if (historyBtn && historyDropdown && sysInput) {
      historyBtn.onclick = function(e) {
        e.stopPropagation();
        if (historyDropdown.style.display === 'block') {
          historyDropdown.style.display = 'none';
          return;
        }
        let history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        let itemsHtml = '';
        if (history.length === 0) {
          itemsHtml = '<div class="history-item" style="color:#999;">No history yet.</div>';
        } else {
          itemsHtml = history.map(item => {
            let text, timestamp;
            if (typeof item === 'string') {
              text = item;
              timestamp = '';
            } else {
              text = item.text;
              timestamp = item.timestamp || '';
            }
            const capped = text.length > 80 ? text.slice(0, 80) + '…' : text;
            return `<div class=\"history-item\"><span>${capped.replace(/</g, "&lt;")}</span><span class=\"history-timestamp\">${timestamp}</span></div>`;
          }).join('');
        }
        historyDropdown.innerHTML = `
          <div class=\"history-dropdown-header\">
            <span>History</span>
            <button class=\"clear-history-btn\" title=\"Clear history\"><i class=\"material-icons\">clear_all</i></button>
          </div>
          <div class=\"history-items-list\">${itemsHtml}</div>
        `;
        historyDropdown.style.display = 'block';
        // Add click listeners for items
        const items = historyDropdown.querySelectorAll('.history-item');
        items.forEach((el, idx) => {
          if (history[idx]) {
            el.onclick = () => {
              const item = history[idx];
              sysInput.value = typeof item === 'string' ? item : item.text;
              historyDropdown.style.display = 'none';
            };
          }
        });
        // Add clear history button handler
        const clearBtn = historyDropdown.querySelector('.clear-history-btn');
        if (clearBtn) {
          clearBtn.onclick = function(ev) {
            ev.stopPropagation();
            localStorage.removeItem(STORAGE_KEY);
            historyDropdown.innerHTML = `
              <div class=\"history-dropdown-header\">
                <span>History</span>
                <button class=\"clear-history-btn\" title=\"Clear history\"><i class=\"material-icons\">clear_all</i></button>
              </div>
              <div class=\"history-item\" style=\"color:#999;\">No history yet.</div>
            `;
            // Re-attach clear button handler
            historyDropdown.querySelector('.clear-history-btn').onclick = clearBtn.onclick;
          };
        }
      };

      // Hide dropdown when clicking outside
      document.addEventListener('click', function() {
        historyDropdown.style.display = 'none';
      });
    }

    if (sysInput && saveBtn) {
      sysInput.addEventListener('input', function() {
        if (sysInput.value.trim() && sysInput.value !== lastSavedValue) {
          saveBtn.style.display = 'block';
        } else {
          saveBtn.style.display = 'none';
        }
      });

      saveBtn.addEventListener('click', function() {
        const value = sysInput.value.trim();
        if (value && value !== lastSavedValue) {
          saveSystemInstruction(value);
          lastSavedValue = value;
          saveBtn.style.display = 'none';
        }
      });
    }

    // Save to history on submit/change (call this in your submit handler)
    function saveSystemInstruction(instruction) {
      let history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const now = new Date();
      const timestamp = now.toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
      // Remove any previous entry with the same text
      history = history.filter(item => item.text !== instruction);
      if (instruction) {
        history.unshift({ text: instruction, timestamp });
        if (history.length > 20) history = history.slice(0, 20);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
      }
    }

    // Example: Call saveSystemInstruction when system instructions are submitted
    const sysForm = document.querySelector('.system-instructions-panel form');
    if (sysForm) {
      sysForm.addEventListener('submit', function(e) {
        const value = sysInput.value.trim();
        saveSystemInstruction(value);
      });
    }
}); 