var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "GLM.jl Documentation",
    "title": "GLM.jl Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#GLM.jl-Documentation-1",
    "page": "GLM.jl Documentation",
    "title": "GLM.jl Documentation",
    "category": "section",
    "text": "DocTestSetup = quote\n    using Distributions, GLM\nend"
},

{
    "location": "index.html#GLM.LinearModel",
    "page": "GLM.jl Documentation",
    "title": "GLM.LinearModel",
    "category": "type",
    "text": "LinearModel\n\nA combination of a LmResp and a LinPred\n\nMembers\n\nrr: a LmResp object\npp: a LinPred object\n\n\n\n"
},

{
    "location": "index.html#GLM.LmResp",
    "page": "GLM.jl Documentation",
    "title": "GLM.LmResp",
    "category": "type",
    "text": "LmResp\n\nEncapsulates the response for a linear model\n\nMembers\n\nmu: current value of the mean response vector or fitted value\noffset: optional offset added to the linear predictor to form mu\nwts: optional vector of prior weights\ny: observed response vector\n\nEither or both offset and wts may be of length 0\n\n\n\n"
},

{
    "location": "index.html#GLM.LinPred",
    "page": "GLM.jl Documentation",
    "title": "GLM.LinPred",
    "category": "type",
    "text": "LinPred\n\nAbstract type representing a linear predictor\n\n\n\n"
},

{
    "location": "index.html#GLM.GlmResp",
    "page": "GLM.jl Documentation",
    "title": "GLM.GlmResp",
    "category": "type",
    "text": "GlmResp\n\nThe response vector and various derived vectors in a generalized linear model.\n\n\n\n"
},

{
    "location": "index.html#GLM.DensePredQR",
    "page": "GLM.jl Documentation",
    "title": "GLM.DensePredQR",
    "category": "type",
    "text": "DensePredQR\n\nA LinPred type with a dense, unpivoted QR decomposition of X\n\nMembers\n\nX: Model matrix of size n × p with n ≥ p.  Should be full column rank.\nbeta0: base coefficient vector of length p\ndelbeta: increment to coefficient vector, also of length p\nscratchbeta: scratch vector of length p, used in linpred! method\nqr: a QRCompactWY object created from X, with optional row weights.\n\n\n\n"
},

{
    "location": "index.html#GLM.DensePredChol",
    "page": "GLM.jl Documentation",
    "title": "GLM.DensePredChol",
    "category": "type",
    "text": "DensePredChol{T}\n\nA LinPred type with a dense Cholesky factorization of X\'X\n\nMembers\n\nX: model matrix of size n × p with n ≥ p.  Should be full column rank.\nbeta0: base coefficient vector of length p\ndelbeta: increment to coefficient vector, also of length p\nscratchbeta: scratch vector of length p, used in linpred! method\nchol: a Base.LinAlg.Cholesky object created from X\'X, possibly using row weights.\nscratchm1: scratch Matrix{T} of the same size as X\nscratchm2: scratch Matrix{T} os the same size as X\'X\n\n\n\n"
},

{
    "location": "index.html#Types-defined-in-the-package-1",
    "page": "GLM.jl Documentation",
    "title": "Types defined in the package",
    "category": "section",
    "text": "LinearModel\nLmResp\nLinPred\nGlmResp\nDensePredQR\nDensePredChol"
},

{
    "location": "index.html#Constructors-for-models-1",
    "page": "GLM.jl Documentation",
    "title": "Constructors for models",
    "category": "section",
    "text": "The most general approach to fitting a model is with the StatsBase.fit function, as injulia> fit(LinearModel, hcat(ones(10), 1:10), randn(MersenneTwister(12321), 10))\nGLM.LinearModel{GLM.LmResp{Array{Float64,1}},GLM.DensePredChol{Float64,Base.LinAlg.Cholesky{Float64,Array{Float64,2}}}}:\n\nCoefficients:\n      Estimate Std.Error  t value Pr(>|t|)\nx1    0.717436  0.775175 0.925515   0.3818\nx2   -0.152062  0.124931 -1.21717   0.2582This model can also be fit asjulia> lm(hcat(ones(10), 1:10), randn(MersenneTwister(12321), 10))\nGLM.LinearModel{GLM.LmResp{Array{Float64,1}},GLM.DensePredChol{Float64,Base.LinAlg.Cholesky{Float64,Array{Float64,2}}}}:\n\nCoefficients:\n      Estimate Std.Error  t value Pr(>|t|)\nx1    0.717436  0.775175 0.925515   0.3818\nx2   -0.152062  0.124931 -1.21717   0.2582"
},

{
    "location": "index.html#GLM.delbeta!",
    "page": "GLM.jl Documentation",
    "title": "GLM.delbeta!",
    "category": "function",
    "text": "delbeta!(p::LinPred, r::Vector)\n\nEvaluate and return p.delbeta the increment to the coefficient vector from residual r\n\n\n\n"
},

{
    "location": "index.html#GLM.linpred!",
    "page": "GLM.jl Documentation",
    "title": "GLM.linpred!",
    "category": "function",
    "text": "linpred!(out, p::LinPred, f::Real=1.0)\n\nOverwrite out with the linear predictor from p with factor f\n\nThe effective coefficient vector, p.scratchbeta, is evaluated as p.beta0 .+ f * p.delbeta, and out is updated to p.X * p.scratchbeta\n\n\n\n"
},

{
    "location": "index.html#GLM.linpred",
    "page": "GLM.jl Documentation",
    "title": "GLM.linpred",
    "category": "function",
    "text": "linpred(p::LinPred, f::Read=1.0)\n\nReturn the linear predictor p.X * (p.beta0 .+ f * p.delbeta)\n\n\n\n"
},

{
    "location": "index.html#GLM.installbeta!",
    "page": "GLM.jl Documentation",
    "title": "GLM.installbeta!",
    "category": "function",
    "text": "installbeta!(p::LinPred, f::Real=1.0)\n\nInstall pbeta0 .+= f * p.delbeta and zero out p.delbeta.  Return the updated p.beta0.\n\n\n\n"
},

{
    "location": "index.html#GLM.cancancel",
    "page": "GLM.jl Documentation",
    "title": "GLM.cancancel",
    "category": "function",
    "text": "cancancel(r::GlmResp{V,D,L})\n\nReturns true if dμ/dη for link L is the variance function for distribution D\n\nWhen L is the canonical link for D the derivative of the inverse link is a multiple of the variance function for D.  If they are the same a numerator and denominator term in the expression for the working weights will cancel.\n\n\n\n"
},

{
    "location": "index.html#GLM.updateμ!",
    "page": "GLM.jl Documentation",
    "title": "GLM.updateμ!",
    "category": "function",
    "text": "updateμ!{T<:FPVector}(r::GlmResp{T}, linPr::T)\n\nUpdate the mean, working weights and working residuals, in r given a value of the linear predictor, linPr.\n\n\n\n"
},

{
    "location": "index.html#GLM.wrkresp",
    "page": "GLM.jl Documentation",
    "title": "GLM.wrkresp",
    "category": "function",
    "text": "wrkresp(r::GlmResp)\n\nThe working response, r.eta + r.wrkresid - r.offset.\n\n\n\n"
},

{
    "location": "index.html#GLM.wrkresp!",
    "page": "GLM.jl Documentation",
    "title": "GLM.wrkresp!",
    "category": "function",
    "text": "wrkresp!{T<:FPVector}(v::T, r::GlmResp{T})\n\nOverwrite v with the working response of r\n\n\n\n"
},

{
    "location": "index.html#GLM.dispersion",
    "page": "GLM.jl Documentation",
    "title": "GLM.dispersion",
    "category": "function",
    "text": "dispersion(m::AbstractGLM, sqr::Bool=false)\n\nReturn the estimated dispersion (or scale) parameter for a model\'s distribution, generally written σ² for linear models and ϕ for generalized linear models. It is, by definition, equal to 1 for the Bernoulli, Binomial, and Poisson families.\n\nIf sqr is true, the squared dispersion parameter is returned.\n\n\n\n"
},

{
    "location": "index.html#Methods-for-model-updating-1",
    "page": "GLM.jl Documentation",
    "title": "Methods for model updating",
    "category": "section",
    "text": "delbeta!\nlinpred!\nlinpred\nGLM.installbeta!\nGLM.cancancel\nupdateμ!\nwrkresp\nGLM.wrkresp!\nGLM.dispersion"
},

{
    "location": "index.html#GLM.Link",
    "page": "GLM.jl Documentation",
    "title": "GLM.Link",
    "category": "type",
    "text": "Link\n\nAn abstract type whose subtypes determine methods for linkfun, linkinv, mueta, and inverselink.\n\n\n\n"
},

{
    "location": "index.html#GLM.Link01",
    "page": "GLM.jl Documentation",
    "title": "GLM.Link01",
    "category": "type",
    "text": "Link01\n\nAn abstract subtype of Link which are links defined on (0, 1)\n\n\n\n"
},

{
    "location": "index.html#GLM.CauchitLink",
    "page": "GLM.jl Documentation",
    "title": "GLM.CauchitLink",
    "category": "type",
    "text": "CauchitLink\n\nA Link01 corresponding to the standard Cauchy distribution, Distributions.Cauchy.\n\n\n\n"
},

{
    "location": "index.html#GLM.CloglogLink",
    "page": "GLM.jl Documentation",
    "title": "GLM.CloglogLink",
    "category": "type",
    "text": "CloglogLink\n\nA Link01 corresponding to the extreme value (or log-Wiebull) distribution.  The link is the complementary log-log transformation, log(1 - log(-μ)).\n\n\n\n"
},

{
    "location": "index.html#GLM.IdentityLink",
    "page": "GLM.jl Documentation",
    "title": "GLM.IdentityLink",
    "category": "type",
    "text": "IdentityLink\n\nThe canonical Link for the Normal distribution, defined as η = μ.\n\n\n\n"
},

{
    "location": "index.html#GLM.InverseLink",
    "page": "GLM.jl Documentation",
    "title": "GLM.InverseLink",
    "category": "type",
    "text": "InverseLink\n\nThe canonical Link for Distributions.Gamma distribution, defined as η = inv(μ).\n\n\n\n"
},

{
    "location": "index.html#GLM.InverseSquareLink",
    "page": "GLM.jl Documentation",
    "title": "GLM.InverseSquareLink",
    "category": "type",
    "text": "InverseSquareLink\n\nThe canonical Link for Distributions.InverseGaussian distribution, defined as η = inv(abs2(μ)).\n\n\n\n"
},

{
    "location": "index.html#GLM.LogitLink",
    "page": "GLM.jl Documentation",
    "title": "GLM.LogitLink",
    "category": "type",
    "text": "LogitLink\n\nThe canonical Link01 for Distributions.Bernoulli and Distributions.Binomial. The inverse link, linkinv, is the c.d.f. of the standard logistic distribution, Distributions.Logistic.\n\n\n\n"
},

{
    "location": "index.html#GLM.LogLink",
    "page": "GLM.jl Documentation",
    "title": "GLM.LogLink",
    "category": "type",
    "text": "LogLink\n\nThe canonical Link for Distributions.Poisson, defined as η = log(μ).\n\n\n\n"
},

{
    "location": "index.html#GLM.ProbitLink",
    "page": "GLM.jl Documentation",
    "title": "GLM.ProbitLink",
    "category": "type",
    "text": "ProbitLink\n\nA Link01 whose linkinv is the c.d.f. of the standard normal distribution, ()Distributions.Normal()).\n\n\n\n"
},

{
    "location": "index.html#GLM.SqrtLink",
    "page": "GLM.jl Documentation",
    "title": "GLM.SqrtLink",
    "category": "type",
    "text": "SqrtLink\n\nA Link defined as η = √μ\n\n\n\n"
},

{
    "location": "index.html#GLM.linkfun",
    "page": "GLM.jl Documentation",
    "title": "GLM.linkfun",
    "category": "function",
    "text": "linkfun(L::Link, μ)\n\nReturn η, the value of the linear predictor for link L at mean μ.\n\nExamples\n\njulia> μ = inv(10):inv(5):1\n0.1:0.2:0.9\n\njulia> show(linkfun.(LogitLink(), μ))\n[-2.19722, -0.847298, 0.0, 0.847298, 2.19722]\n\n\n\n\n"
},

{
    "location": "index.html#GLM.linkinv",
    "page": "GLM.jl Documentation",
    "title": "GLM.linkinv",
    "category": "function",
    "text": "linkinv(L::Link, η)\n\nReturn μ, the mean value, for link L at linear predictor value η.\n\nExamples\n\njulia> μ = inv(10):inv(5):1; showcompact(collect(μ))\n[0.1, 0.3, 0.5, 0.7, 0.9]\njulia> η = logit.(μ); showcompact(η)\n[-2.19722, -0.847298, 0.0, 0.847298, 2.19722]\njulia> showcompact(linkinv.(LogitLink(), η))\n[0.1, 0.3, 0.5, 0.7, 0.9]\n\n\n\n"
},

{
    "location": "index.html#GLM.mueta",
    "page": "GLM.jl Documentation",
    "title": "GLM.mueta",
    "category": "function",
    "text": "mueta(L::Link, η)\n\nReturn the derivative of linkinv, dμ/dη, for link L at linear predictor value η.\n\nExamples\n\njulia> showcompact(mueta(LogitLink(), 0.0))\n0.25\njulia> showcompact(mueta(CloglogLink(), 0.0))\n0.367879\njulia> showcompact(mueta(LogLink(), 2.0))\n7.38906\n\n\n\n"
},

{
    "location": "index.html#GLM.inverselink",
    "page": "GLM.jl Documentation",
    "title": "GLM.inverselink",
    "category": "function",
    "text": "inverselink(L::Link, η)\n\nReturn a 3-tuple of the inverse link, the derivative of the inverse link, and when appropriate, the variance function μ*(1 - μ).\n\nThe variance function is returned as NaN unless the range of μ is (0, 1)\n\nExamples\n\njulia> showcompact(inverselink(LogitLink(), 0.0))\n(0.5, 0.25, 0.25)\njulia> showcompact(inverselink(CloglogLink(), 0.0))\n(0.632121, 0.367879, 0.232544)\njulia> showcompact(inverselink(LogLink(), 2.0))\n(7.38906, 7.38906, NaN)\n\n\n\n"
},

{
    "location": "index.html#GLM.canonicallink",
    "page": "GLM.jl Documentation",
    "title": "GLM.canonicallink",
    "category": "function",
    "text": "canonicallink(D::Distribution)\n\nReturn the canonical link for distribution D, which must be in the exponential family.\n\nExamples\n\njulia> canonicallink(Bernoulli())\nGLM.LogitLink()\n\n\n\n"
},

{
    "location": "index.html#GLM.glmvar",
    "page": "GLM.jl Documentation",
    "title": "GLM.glmvar",
    "category": "function",
    "text": "glmvar(D::Distribution, μ)\n\nReturn the value of the variance function for D at μ\n\nThe variance of D at μ is the product of the dispersion parameter, ϕ, which does not depend on μ and the value of glmvar.  In other words glmvar returns the factor of the variance that depends on μ.\n\nExamples\n\njulia> μ = inv(6):inv(3):1; showcompact(collect(μ))\n[0.166667, 0.5, 0.833333]\njulia> showcompact(glmvar.(Normal(), μ))    # constant for Normal()\n[1.0, 1.0, 1.0]\njulia> showcompact(glmvar.(Bernoulli(), μ)) # μ * (1 - μ) for Bernoulli()\n[0.138889, 0.25, 0.138889]\njulia> showcompact(glmvar.(Poisson(), μ))   # μ for Poisson()\n[0.166667, 0.5, 0.833333]\n\n\n\n"
},

{
    "location": "index.html#GLM.mustart",
    "page": "GLM.jl Documentation",
    "title": "GLM.mustart",
    "category": "function",
    "text": "mustart(D::Distribution, y, wt)\n\nReturn a starting value for μ.\n\nFor some distributions it is appropriate to set μ = y to initialize the IRLS algorithm but for others, notably the Bernoulli, the values of y are not allowed as values of μ and must be modified.\n\nExamples\n\njulia> showcompact(mustart(Bernoulli(), 0.0, 1))\n0.25\njulia> showcompact(mustart(Bernoulli(), 1.0, 1))\n0.75\njulia> showcompact(mustart(Binomial(), 0.0, 10))\n0.0454545\njulia> showcompact(mustart(Normal(), 0.0, 1))\n0.0\n\n\n\n"
},

{
    "location": "index.html#GLM.devresid",
    "page": "GLM.jl Documentation",
    "title": "GLM.devresid",
    "category": "function",
    "text": "devresid(D, y, μ)\n\nReturn the squared deviance residual of μ from y for distribution D\n\nThe deviance of a GLM can be evaluated as the sum of the squared deviance residuals.  This is the principal use for these values.  The actual deviance residual, say for plotting, is the signed square root of this value\n\nsign(y - μ) * sqrt(devresid(D, y, μ))\n\nExamples\n\njulia> showcompact(devresid(Normal(), 0, 0.25))     # abs2(y - μ)\n0.0625\njulia> showcompact(devresid(Bernoulli(), 1, 0.75))  # -2log(μ) when y == 1\n0.575364\njulia> showcompact(devresid(Bernoulli(), 0, 0.25))  # -2log1p(-μ) = -2log(1-μ) when y == 0\n0.575364\n\n\n\n"
},

{
    "location": "index.html#GLM.dispersion_parameter",
    "page": "GLM.jl Documentation",
    "title": "GLM.dispersion_parameter",
    "category": "function",
    "text": "dispersion_parameter(D)  # not exported\n\nDoes distribution D have a separate dispersion parameter, ϕ?\n\nReturns false for the Bernoulli, Binomial and Poisson distributions, true otherwise.\n\nExamples\n\njulia> show(GLM.dispersion_parameter(Normal()))\ntrue\njulia> show(GLM.dispersion_parameter(Bernoulli()))\nfalse\n\n\n\n"
},

{
    "location": "index.html#GLM.loglik_obs",
    "page": "GLM.jl Documentation",
    "title": "GLM.loglik_obs",
    "category": "function",
    "text": "loglik_obs(D, y, μ, wt, ϕ)  # not exported\n\nReturns wt * logpdf(D(μ, ϕ), y) where the parameters of D are derived from μ and ϕ.\n\nThe wt argument is a multiplier of the result except in the case of the Binomial where wt is the number of trials and μ is the proportion of successes.\n\nThe loglikelihood of a fitted model is the sum of these values over all the observations.\n\n\n\n"
},

{
    "location": "index.html#Links-and-methods-applied-to-them-1",
    "page": "GLM.jl Documentation",
    "title": "Links and methods applied to them",
    "category": "section",
    "text": "Link\nGLM.Link01\nCauchitLink\nCloglogLink\nIdentityLink\nInverseLink\nInverseSquareLink\nLogitLink\nLogLink\nProbitLink\nSqrtLink\nlinkfun\nlinkinv\nmueta\ninverselink\ncanonicallink\nglmvar\nmustart\ndevresid\nGLM.dispersion_parameter\nGLM.loglik_obs"
},

]}
